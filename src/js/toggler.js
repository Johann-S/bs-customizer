import $ from 'jquery'

$(() => {
  $(document.querySelectorAll('.js-group')).each(function () {
    const checkboxes = [].slice.call(this.querySelectorAll('.js-checkbox'))

    $(this.querySelector('.js-btn-toggle')).on('click', { checkboxes }, function () {
      const checkedList = checkboxes.filter(chkBox => chkBox.checked)

      if (checkedList.length > 0) {
        // Uncheck all checked checkboxes
        checkedList.forEach(chkBox => {
          chkBox.click()
        })
      } else {
        // Check all checkboxes
        checkboxes.forEach(chkBox => {
          chkBox.click()
        })
      }
    })
  })
})
