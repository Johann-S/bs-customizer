const initToggler = () => {
  const jsGroupList = [].slice.call(document.querySelectorAll('.js-group'))

  jsGroupList.forEach(group => {
    const checkboxes = [].slice.call(group.querySelectorAll('.js-checkbox'))

    group.querySelector('.js-btn-toggle')
      .addEventListener('click', () => {
        const checkedList = checkboxes.filter(chkBox => chkBox.checked)

        if (checkedList.length > 0) {
          // Uncheck all checked checkboxes
          checkedList.forEach(chkBox => chkBox.click())
        } else {
          // Check all checkboxes
          checkboxes.forEach(chkBox => chkBox.click())
        }
      })
  })
}

export {
  initToggler
}
