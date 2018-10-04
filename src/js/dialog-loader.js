import $ from 'jquery/dist/jquery.slim'
import 'bootstrap/js/dist/modal'
import 'boxicons/css/boxicons.css'

let $modal
let $loader
let $generatedLink
let $loadingStatus
let $modalHeader

const dialogClass = 'dialog-loader'
const template = `
<div class="modal fade ${dialogClass}" tabindex="-1" role="dialog" data-backdrop="static">
  <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header d-none">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center">
        <div id="loader">
          <span class="bx bx-loader bx-spin bx-lg"></span>
        </div>
        <p id="loadingStatus" class="mt-3 mb-0"></p>
        <a id="generatedLink" class="btn btn-primary d-none">
          <span class="bx bx-download" aria-hidden="true"></span> Download
        </a>
      </div>
    </div>
  </div>
</div>
`

const createModal = () => {
  $(document.body).append(template)
  $modal = $(`.${dialogClass}`)
  $loader = $('#loader')
  $generatedLink = $('#generatedLink')
  $loadingStatus = $('#loadingStatus')
  $modalHeader = $modal.find('.modal-header')

  $modal.on('hidden.bs.modal', () => {
    $loadingStatus.text('')

    $modalHeader.addClass('d-none')
    URL.revokeObjectURL($generatedLink.attr('href'))
    $generatedLink.addClass('d-none')
      .attr('href', '')

    $loader.removeClass('d-none')
    $loadingStatus.removeClass('d-none')
  })
}

const showModal = (callback) => {
  $loadingStatus.text('Building your custom Bootstrap...')
  $modal
    .one('shown.bs.modal', () => {
      callback()
    })
    .modal('show')
}

const updateLink = (fileName, link) => {
  $generatedLink.attr('href', link)
    .attr('download', fileName)
    .removeClass('d-none')

  $modalHeader.removeClass('d-none')
  $loader.addClass('d-none')
  $loadingStatus.addClass('d-none')
}

const hideModal = () => {
  $modal.modal('hide')
}

export {
  createModal,
  showModal,
  hideModal,
  updateLink
}
