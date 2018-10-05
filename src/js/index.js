import $ from 'jquery'
import Sass from 'sass.js/dist/sass'

import { build } from './build'
import { formatList, ucfirst, getSassWorkerPath, supportedBrowser } from './util'
import {
  createModal,
  showModal,
  updateLink
} from './dialog-loader'
import { initToggler } from './toggler'

import 'bootstrap/dist/css/bootstrap.css'
import '../css/main.css'

let chooseToImportPopper = true

$(() => {
  if (!supportedBrowser()) {
    $('.js-alert-browser').removeClass('d-none')
    return
  }

  Sass.setWorkerUrl(getSassWorkerPath())
  createModal()
  initToggler()

  const $form = $('.js-form-customize')
  const $checkBoxRequirePopper = $form.find('.js-require-popper')
  const $checkboxPopper = $form.find('.js-check-popper')
  const $chkMinify = $form.find('.js-check-minify')
  const $chkCSS = $form.find('.js-check-css')
  const popperCheckboxList = [].slice.call(document.querySelectorAll('.js-require-popper'))

  $checkboxPopper.on('click', function () {
    chooseToImportPopper = this.checked
  })

  $checkBoxRequirePopper.on('click', function () {
    if (!this.checked) {
      const stillCheckedList = popperCheckboxList
        .filter((chk) => chk.checked)

      if (stillCheckedList.length === 0) {
        $checkboxPopper[0].checked = false
      }
    } else if (chooseToImportPopper) {
      $checkboxPopper[0].checked = true
    }
  })

  $form.on('submit', function (event) {
    event.preventDefault()

    const formData = $form.serializeArray()
    if (formData.length === 0) {
      return
    }

    showModal(() => {
      const fileName = 'bootstrap.custom.zip'
      const pluginList = formatList(formData.map((value) => ucfirst(value.name)))

      build(pluginList, $checkboxPopper[0].checked, $chkMinify[0].checked, $chkCSS[0].checked)
        .then(url => {
          updateLink(fileName, url)
        })
    })
  })
})
