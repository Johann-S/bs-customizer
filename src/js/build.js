import axios from 'axios'
import JSZip from 'jszip'
import Sass from 'sass.js/dist/sass'
import CleanCSS from './lib/clean-css'
import autoprefixer from './lib/autoprefixer'

import { jsPlugins, scssPlugins } from './plugins'
import { createJsFileContent, generateLink } from './file-util'
import { formatScssList, uniqArray } from './util'

const popperCDN = 'https://unpkg.com/popper.js/dist/umd/popper.js'
const autoPrefixerConfig = {
  cascade: false,
  from: undefined,
  browsers: [
    '>= 1%',
    'last 1 major version',
    'not dead',
    'Chrome >= 45',
    'Firefox >= 38',
    'Edge >= 12',
    'Explorer >= 10',
    'iOS >= 9',
    'Safari >= 9',
    'Android >= 4.4',
    'Opera >= 30'
  ]
}

const configCleanCSS = {
  level: 1,
  format: {
    breakWith: 'lf'
  }
}
const configSass = {
  precision: 6,
  style: Sass.style.expanded
}

const buildJavaScript = (files, minify) => {
  return new Promise((resolve, reject) => {
    axios.all(files)
      .then(filesData => {
        resolve(
          createJsFileContent(filesData, minify)
        )
      })
      .catch(() => {
        reject(new Error('An error occured during building JS files'))
      })
  })
}

const buildScss = (files, minify) => {
  return new Promise((resolve, reject) => {
    axios.all(files)
      .then(scssFiles => {
        const sass = new Sass()
        sass.options(configSass)

        const resultFileOrder = []
        scssFiles.forEach(result => {
          const splittedString = result.config.url.split('/')
          const fileName = splittedString[splittedString.length - 1]

          if (splittedString.indexOf('mixins') !== -1) {
            const path = `mixins/${fileName}`
            resultFileOrder.push(path)
            sass.writeFile(path, result.data)
          } else if (splittedString.indexOf('utilities') !== -1) {
            const path = `utilities/${fileName}`
            resultFileOrder.push(path)
            sass.writeFile(path, result.data)
          } else {
            resultFileOrder.push(fileName)
            sass.writeFile(fileName, result.data)
          }
        })

        const result = formatScssList(resultFileOrder)
          .map(file => {
            if (file.charAt(0) === '_') {
              file = file.substr(1)
            }

            const splitFile = file.split('.scss')
            return `@import "${splitFile[0]}";`
          })

        sass.compile(result.join(' '), result => {
          if (result.status === 0) {
            autoprefixer.process(result.text, autoPrefixerConfig)
              .then(result => {
                let cssContent = result.css

                if (minify) {
                  cssContent = new CleanCSS(configCleanCSS).minify(cssContent).styles
                }

                resolve(cssContent)
              })
          } else {
            reject(result.message)
          }
        })
      })
  })
}

const build = (pluginList, addPopper, minify, includeCSS) => {
  const fileName = `bootstrap.custom${minify ? '.min' : ''}`
  const zip = new JSZip()

  let listJsRequest = []
  let listScssRequest = []

  pluginList.forEach(plugin => {
    if (jsPlugins[plugin]) {
      listJsRequest = listJsRequest.concat(jsPlugins[plugin].js)

      if (includeCSS) {
        listScssRequest = listScssRequest.concat(jsPlugins[plugin].scss)
      }
    } else {
      listScssRequest = listScssRequest.concat(scssPlugins[plugin])
    }
  })

  listJsRequest = uniqArray(listJsRequest)
    .map(url => axios.get(url))

  if (addPopper) {
    listJsRequest.unshift(axios.get(popperCDN))
  }

  if (listScssRequest.length > 0) {
    // Add reboot by default
    listScssRequest = listScssRequest.concat(scssPlugins.Reboot)
    listScssRequest = uniqArray(listScssRequest).map(url => axios.get(url))
  }

  return new Promise(resolve => {
    buildJavaScript(listJsRequest, minify)
      .then(jsFileContent => {
        if (jsFileContent.length > 0) {
          zip.file(`${fileName}.js`, jsFileContent)
        }

        if (listScssRequest.length > 0) {
          return buildScss(listScssRequest, minify)
        }

        return Promise.resolve('')
      })
      .then(cssContent => {
        if (cssContent.length > 0) {
          zip.file(`${fileName}.css`, cssContent)
        }

        zip.generateAsync({ type: 'blob' })
          .then(content => {
            resolve(generateLink(content))
          })
      })
  })
}

export {
  build
}
