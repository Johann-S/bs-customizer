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

const generateLink = (fileContent) => {
  const fileData = new Blob([ fileContent ], {
    type: 'text/javascript;charset=utf-8'
  })

  const downloadUrl = URL.createObjectURL(fileData, {
    type: 'application/javascript',
  })

  return downloadUrl
}

export {
  createFileContent,
  generateLink,
}
