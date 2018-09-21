const createFileContent = (listOfFiles) => {
	let content = ''

	listOfFiles.forEach((file) => {
		content += file.data
	})

	return content
}

const downloadFile = (fileName, fileContent) => {
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

export {
	createFileContent,
	downloadFile,
}
