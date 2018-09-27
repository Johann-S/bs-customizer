import $ from 'jquery'
import Sass from 'sass.js/dist/sass'
import 'promise-polyfill/src/polyfill'

import { build } from './build'
import { formatList, ucfirst, getSassWorkerPath } from './util'
import {
  createModal,
  showModal,
  updateLink
} from './dialog-loader'

import 'bootstrap/dist/css/bootstrap.css'
import './main.css'

const supportedBrowser = !!new Blob
let chooseToImportPopper = true

$(() => {
  if (!supportedBrowser) {
    $('#alertBrowser').removeClass('d-none')
    return
  }

  Sass.setWorkerUrl(getSassWorkerPath())
  createModal()

  const $btnSubmit = $('#btnSubmit')
  const $form = $('form')
  const $checkBoxRequirePopper = $('.require-popper')
  const $checkboxPopper = $('#checkboxPopper')
  const $chkMinify = $('#chkMinify')
  const $chkCSS = $('#chkCSS')
  const popperCheckboxList = [].slice.call(document.querySelectorAll('.require-popper'))

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

  $btnSubmit.on('click', function () {
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
