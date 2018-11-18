import $ from 'jquery'
import Sass from 'sass.js/dist/sass'

import { formatList, ucfirst, getSassWorkerPath, supportedBrowser } from './util'
import { createModal, showModal, updateLink } from './dialog-loader'
import { initToggler } from './toggler'
import { bootstrapVersion } from './config'

import 'bootstrap/dist/css/bootstrap.css'
import '../css/main.css'

$(() => {
  if (!supportedBrowser()) {
    $('.js-alert-browser').removeClass('d-none')
    return
  }

  const { checkboxPopper, chkCSS, chkMinify } = initToggler()
  Sass.setWorkerUrl(getSassWorkerPath())
  createModal()

  $(document.querySelector('.js-form-customize')).on('submit', function (event) {
    event.preventDefault()

    const formData = $(this).serializeArray()
    if (formData.length === 0) {
      return
    }

    showModal(() => {
      import(/* webpackChunkName: "build" */ './build')
        .then(({ build }) => {
          const fileName = `bootstrap.${bootstrapVersion}.custom.zip`
          const pluginList = formatList(formData.map((value) => ucfirst(value.name)))

          build(pluginList, checkboxPopper.checked, chkMinify.checked, chkCSS.checked)
            .then(url => {
              updateLink(fileName, url)
            })
        })
    })
  })
})
