document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-group').forEach(group => {
    const checkboxes = [...group.querySelectorAll('.js-checkbox')]

    group.querySelector('.js-btn-toggle').addEventListener('click', () => {
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
    });
  });
})
