const formatList = list => {
  const listPlugin = [].concat(list)

  // Insert Tooltip if not present and Popover is needed
  if (listPlugin.indexOf('popover') !== -1 && listPlugin.indexOf('tooltip') === -1) {
    const popoverIndex = listPlugin.indexOf('popover')
    listPlugin.splice(popoverIndex, 0, 'tooltip')
  }

  // Tooltip present and Popover present, Tooltip comes first
  const popoverIndex = listPlugin.indexOf('popover')
  const tooltipIndex = listPlugin.indexOf('tooltip')
  if (
    (popoverIndex !== -1 && tooltipIndex !== -1) &&
    popoverIndex < tooltipIndex
  ) {
    listPlugin.splice(tooltipIndex, 1)
    listPlugin.splice(popoverIndex, 0, 'tooltip')
  }

  return listPlugin
}

const formatScssList = list => {
  let result = []
  const mixinList = list.filter(str => str.indexOf('mixins') !== -1)
  const utilitiesList = list.filter(str => str.indexOf('utilities') !== -1)

  const functionsIndex = list.findIndex(file => file.indexOf('functions') !== -1)
  if (functionsIndex !== -1) {
    result.push(list[functionsIndex])
  }

  const varIndex = list.findIndex(file => file.indexOf('variables') !== -1)
  if (varIndex !== -1) {
    result.push(list[varIndex])
  }

  // Add mixins
  result = result.concat(mixinList)
  // Remove mixins from the list
  mixinList.forEach(mixin => {
    const mixinIndex = list.indexOf(mixin)
    list.splice(mixinIndex, 1)
  })

  const plugins = [
    'root',
    'reboot',
    'type',
    'images',
    'code',
    'gird',
    'tables',
    'forms',
    'buttons',
    'transitions',
    'dropdown',
    'button-group',
    'input-group',
    'custom-forms',
    'nav',
    'navbar',
    'card',
    'breadcrumb',
    'pagination',
    'badge',
    'jumbotron',
    'alert',
    'progress',
    'media',
    'list-group',
    'close',
    'modal',
    'tooltip',
    'popover',
    'carousel'
  ]

  plugins.forEach(item => {
    let index
    if (item === 'forms') {
      index = list.findIndex(file => file.indexOf(item) !== -1 && file.indexOf('custom') === -1)
    } else if (item === 'nav') {
      index = list.findIndex(file => file.indexOf(item) !== -1 && file.indexOf('navbar') === -1)
    } else {
      index = list.findIndex(file => file.indexOf(item) !== -1)
    }

    if (index !== -1) {
      result.push(list[index])
    }
  })

  // Add utilities
  result = result.concat(utilitiesList)
  // Remove utilities from the list
  utilitiesList.forEach(utility => {
    const utilityIndex = list.indexOf(utility)
    list.splice(utilityIndex, 1)
  })

  const printIndex = list.findIndex(file => file.indexOf('print') !== -1)
  if (printIndex !== -1) {
    result.push(list[printIndex])
  }

  return result
}

const ucfirst = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

const uniqArray = array => array.filter((elem, pos, arr) => arr.indexOf(elem) === pos)

const getSassWorkerPath = () => {
  const bsCustomizer = 'bs-customizer'
  const location = window.location
  let origin = location.origin

  if (!origin) {
    const port = location.port ? `:${location.port}` : ''

    origin = `${location.protocol}//${location.hostname}${port}`
  }

  const indexPath = location.pathname
    .split('/')
    .indexOf(bsCustomizer)

  const bsCustomizerPath = indexPath !== -1 ? `/${bsCustomizer}/` : '/'

  return `${origin}${bsCustomizerPath}dist/sass.worker.js`
}

const supportedBrowser = () => {
  const supportBlob = 'Blob' in window
  const supportPromise = 'Promise' in window
  const supportArrayFindIndex = Boolean(Array.prototype.findIndex)

  return supportBlob && supportArrayFindIndex && supportPromise
}

export {
  formatList,
  formatScssList,
  ucfirst,
  uniqArray,
  getSassWorkerPath,
  supportedBrowser
}
