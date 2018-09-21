import $ from 'jquery'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'

const bsCDN = 'https://unpkg.com/bootstrap/js/dist/'

const supportedBrowser = !!new Blob
const fileName = 'bootstrap.custom.js'

const createFileContent = (listOfFiles) => {
	let content = ''

	listOfFiles.forEach((file) => {
		content += file.data
	})

	return content
}

const downloadFile = (fileContent) => {
	const fileData = new Blob([ fileContent ], {
		type: 'text/plain;charset=utf-8'
	})

	const downloadUrl = URL.createObjectURL(fileData, {
    type: 'application/javascript',
  })

  const a = document.createElement('a')
  a.href = downloadUrl
  a.setAttribute('download', fileName)
  a.click()

  URL.revokeObjectURL(downloadUrl)
}

$(() => {
	const $btnSubmit = $('#btnSubmit')
	const $form = $('form')

	$btnSubmit.on('click', function (event) {
		event.preventDefault()
		const formData = $form.serializeArray()
		if (formData.length === 0) {
			return
		}

		const listOfRequest = [
			axios.get(`${bsCDN}util.js`)
		]

		const listPlugin = formData.map((value) => value.name)

		listPlugin
			.forEach(value => {
				listOfRequest.push(
					axios.get(`${bsCDN}${value}.js`)
				)
			})

		axios.all(listOfRequest)
			.then((listOfFiles) => {
				const fileContent = createFileContent(listOfFiles)
				downloadFile(fileContent)
			})
	})
})
