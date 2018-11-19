let chooseToImportPopper = true

const initToggler = () => {
  const jsGroupList = [].slice.call(document.querySelectorAll('.js-group'))
  const popperCheckboxList = [].slice.call(document.querySelectorAll('.js-require-popper'))
  const checkboxPopper = document.querySelector('.js-check-popper')
  const checkboxPopover = popperCheckboxList.find(chk => chk.classList.contains('js-popover'))
  const checkboxTooltip = popperCheckboxList.find(chk => chk.classList.contains('js-tooltip'))

  jsGroupList.forEach(group => {
    const checkboxes = [].slice.call(group.querySelectorAll('.js-checkbox'))

    group.querySelector('.js-btn-toggle')
      .addEventListener('click', () => {
        const checkedList = checkboxes.filter(chkBox => chkBox.checked)

        if (checkedList.length > 0) {
          // Uncheck all checked checkboxes
          checkedList.forEach(chkBox => { chkBox.checked = false })
        } else {
          // Check all checkboxes
          checkboxes.forEach(chkBox => { chkBox.checked = true })
        }

        // Popper.js needed or not
        checkboxPopper.checked = Boolean(popperCheckboxList.filter(chk => chk.checked).length)
      })
  })

  checkboxPopper.addEventListener('click', function () {
    chooseToImportPopper = this.checked
  })

  popperCheckboxList.forEach(chkboxNeedPopper => {
    chkboxNeedPopper.addEventListener('click', () => {
      if (!chkboxNeedPopper.checked) {
        const stillCheckedList = popperCheckboxList
          .filter(chk => chk.checked)

        if (stillCheckedList.length === 0) {
          checkboxPopper.checked = false
        }
      } else if (chooseToImportPopper) {
        checkboxPopper.checked = true
      }
    })
  })

  checkboxPopover.addEventListener('change', () => {
    if (checkboxPopover.checked && !checkboxTooltip.checked) {
      checkboxTooltip.checked = checkboxPopover.checked
    }
  })

  return {
    checkboxPopper,
    chkMinify: document.querySelector('.js-check-minify'),
    chkCSS: document.querySelector('.js-check-css')
  }
}

export {
  initToggler
}
