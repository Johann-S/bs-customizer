import $ from 'jquery'

$(() => {
  const jsCheckboxList = [].slice.call(document.querySelectorAll('.js-checkbox'))
  const layoutCheckboxList = [].slice.call(document.querySelectorAll('.layout-checkbox'))
  const contentCheckboxList = [].slice.call(document.querySelectorAll('.content-checkbox'))
  const componentsCheckboxList = [].slice.call(document.querySelectorAll('.components-checkbox'))
  const utilitiesCheckboxList = [].slice.call(document.querySelectorAll('.utilities-checkbox'))

  const getList = $button => {
    if ($button.hasClass('js')) {
      return jsCheckboxList
    } else if ($button.hasClass('layout')) {
      return layoutCheckboxList
    } else if ($button.hasClass('content')) {
      return contentCheckboxList
    } else if ($button.hasClass('components')) {
      return componentsCheckboxList
    } else {
      return utilitiesCheckboxList
    }
  }

  $('.btn-toggle').on('click', function (event) {
    event.preventDefault()

    const list = getList($(this))
    const checkedList = list.filter(chkBox => chkBox.checked)

    if (checkedList.length > 0) {
      list.forEach(chkBox => {
        if (chkBox.checked) {
          chkBox.click()
        }
      })
    } else {
      list.forEach(chkBox => {
        if (!chkBox.checked) {
          chkBox.click()
        }
      })
    }
  })
})
