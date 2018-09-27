const formatList = (list) => {
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

const ucfirst = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

const uniqArray = (array) => array.filter((elem, pos, arr) => arr.indexOf(elem) === pos)

const getLocationOrigin = () => {
  if (!window.location.origin) {
    const port = window.location.port ? ':' + window.location.port: ''

    return `${window.location.protocol}//${window.location.hostname}${port}`
  }

  return window.location.origin
}

export {
  formatList,
  ucfirst,
  uniqArray,
  getLocationOrigin,
}
