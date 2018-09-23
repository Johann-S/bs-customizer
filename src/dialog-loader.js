import $ from 'jquery'
import 'bootstrap/js/dist/modal'
import 'boxicons/css/boxicons.css'

let $modal
let $loadingStatus
const dialogClass = 'dialog-loader'
const template = `
<div class="modal fade ${dialogClass}" tabindex="-1" role="dialog" data-backdrop="static">
  <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <div class="text-center">
          <i class="bx bx-loader bx-spin bx-lg"></i>
        </div>
        <p id="loadingStatus" class="text-center mt-3 mb-0"></p>
      </div>
    </div>
  </div>
</div>
`

const createModal = () => {
  $(document.body).append(template)
  $modal = $(`.${dialogClass}`)
  $loadingStatus = $('#loadingStatus')
}

const showModal = (callback) => {
  $loadingStatus.text('Downloading your assets...')
  $modal
    .one('shown.bs.modal', () => {
      callback()
    })
    .modal('show')
}

const updateDialogStatus = (text) => {
  $loadingStatus.text(text)
  return $loadingStatus[0].offsetHeight
}
const hideModal = () => {
  $modal.one('hidden.bs.modal', () => {
    updateDialogStatus('')
  })
  .modal('hide')
}

export {
  createModal,
  showModal,
  hideModal,
  updateDialogStatus,
}
