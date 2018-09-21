import $ from 'jquery'
import axios from 'axios'

import { createFileContent, downloadFile } from './file-util'
import { formatList } from './util'

import 'bootstrap/dist/css/bootstrap.css'

const bsCDN = 'https://unpkg.com/bootstrap/js/dist/'
const popperCDN = 'https://unpkg.com/popper.js/dist/umd/popper.min.js'

const supportedBrowser = !!new Blob
const popperKey = 'popper'
let chooseToImportPopper = true
let fileName = 'bootstrap.custom.js'

$(() => {
	const $btnSubmit = $('#btnSubmit')
	const $alertBrowser = $('#alertBrowser')
	const $form = $('form')
	const $checkBoxRequirePopper = $('.require-popper')
	const $checkboxPopper = $('#checkboxPopper')

	if (!supportedBrowser) {
		$form.remove()
		$alertBrowser.removeClass('d-none')
		return
	}

	$checkboxPopper.on('click', function () {
		chooseToImportPopper = this.checked
	})

	$checkBoxRequirePopper.on('click', function () {
		if (!this.checked) {
			const stillCheckedList = [].slice.call(document.querySelectorAll('.require-popper'))
				.filter((chk) => chk.checked)

			if (stillCheckedList.length === 0) {
				$checkboxPopper[0].checked = false
			}
		} else if (chooseToImportPopper) {
			$checkboxPopper[0].checked = true
		}
	})

	$btnSubmit.on('click', function (event) {
		event.preventDefault()
		const formData = $form.serializeArray()
		if (formData.length === 0) {
			return
		}

		const listOfRequest = [
			axios.get(`${bsCDN}util.js`)
		]

		const listPlugin = formatList(formData.map((value) => value.name))

		// Add Popper.js if required
		if (listPlugin.indexOf(popperKey) !== -1) {
			listOfRequest.push(
				axios.get(popperCDN)
			)
		}

		listPlugin.forEach(value => {
			if (value !== popperKey) {
				listOfRequest.push(
					axios.get(`${bsCDN}${value}.js`)
				)
			}
		})

		axios.all(listOfRequest)
			.then((listOfFiles) => {
				downloadFile(fileName, createFileContent(listOfFiles))
			})
	})
})
