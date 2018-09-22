import uglify from 'uglifyjs-browser'

const uglifyConfig = {
  compress: {
    typeofs: false,
  },
  mangle: true,
  output: {
    comments: /^!/,
  },
}

const createFileContent = (listOfFiles, minify) => {
	let content = ''

	listOfFiles.forEach((file) => {
		content += file.data
  })

  if (minify) {
    const minifyResult = uglify.minify(content, uglifyConfig)

    if (minifyResult.error) {
      throw new Error('Unable to minify')
    }

    content = minifyResult.code
  }

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
