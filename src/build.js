import axios from 'axios'
import JSZip from 'jszip'
import Sass from 'sass.js/dist/sass'
import CleanCSS from './lib/clean-css'

import { jsPlugins, scssPlugins } from './plugins'
import { createJsFileContent, createCssFileContent, generateLink } from './file-util'
import { formatScssList, uniqArray } from './util'

const popperCDN = 'https://unpkg.com/popper.js/dist/umd/popper.js'

const configCleanCSS = {
  level: 1,
  format: {
    breakWith: 'lf',
  },
}

const build = (pluginList, addPopper, minify, includeCSS) => {
  const fileName = !minify ? 'bootstrap.custom' : 'bootstrap.custom.min'
  let listJsRequest = []
  let listScssRequest = []

  pluginList.forEach((plugin) => {
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
    listScssRequest = uniqArray(listScssRequest)
    listScssRequest = formatScssList(listScssRequest)
      .map(url => axios.get(url))
  }

  return new Promise((resolve, reject) => {
    axios.all(listJsRequest)
      .then(jsFiles => {
        const zip = new JSZip()
        const jsFileContent = createJsFileContent(jsFiles, minify)

        if (jsFileContent.length > 0) {
          zip.file(`${fileName}.js`, jsFileContent)
        }

        if (listScssRequest.length > 0) {
          axios.all(listScssRequest)
            .then(scssFiles => {
              const sass = new Sass()

              sass.compile(createCssFileContent(scssFiles), (result) => {
                if (result.status === 0) {
                  let cssContent = result.text
                  if (minify) {
                    cssContent = new CleanCSS(configCleanCSS).minify(cssContent).styles
                  }

                  zip.file(`${fileName}.css`, cssContent)
                  zip.generateAsync({ type: 'blob' })
                    .then(content => {
                      resolve(generateLink(content))
                    })
                } else {
                  reject(result.message)
                }
              })
            })
        } else {
          zip.generateAsync({ type: 'blob' })
            .then(content => {
              resolve(generateLink(content))
            })
        }
      })
  })
}

export {
  build,
}
