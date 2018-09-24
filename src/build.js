import axios from 'axios'
import JSZip from 'jszip'
import Sass from 'sass.js/dist/sass'

import { plugins } from './plugins'
import { createJsFileContent, createCssFileContent, generateLink } from './file-util'
import { uniqArray } from './util'

const popperCDN = 'https://unpkg.com/popper.js/dist/umd/popper.js'

const build = (pluginList, addPopper, minify, includeCSS) => {
  const fileName = !minify ? 'bootstrap.custom' : 'bootstrap.custom.min'
  let listJsRequest = []
  let listScssRequest = []

  pluginList.forEach((plugin) => {
    listJsRequest = listJsRequest.concat(plugins[plugin].js)

    if (includeCSS) {
      listScssRequest = listScssRequest.concat(plugins[plugin].scss)
    }
  })

  listJsRequest = uniqArray(listJsRequest)
    .map(url => axios.get(url))

  if (addPopper) {
    listJsRequest.unshift(axios.get(popperCDN))
  }

  if (listScssRequest.length > 0) {
    listScssRequest = uniqArray(listScssRequest)
      .map(url => axios.get(url))
  }

  return new Promise((resolve, reject) => {
    axios.all(listJsRequest)
      .then(jsFiles => {
        const zip = new JSZip()
        const jsFileContent = createJsFileContent(jsFiles, minify)

        zip.file(`${fileName}.js`, jsFileContent)

        if (includeCSS) {
          axios.all(listScssRequest)
            .then(scssFiles => {
              const sass = new Sass()

              sass.compile(createCssFileContent(scssFiles), (result) => {
                if (result.status === 0) {
                  zip.file(`${fileName}.css`, result.text)
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
