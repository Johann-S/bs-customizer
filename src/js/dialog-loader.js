import $ from 'jquery'
import 'bootstrap/js/dist/modal'

let $modal
let $loader
let $generatedLink
let $loadingStatus
let $modalHeader

const dialogClass = 'js-dialog-loader'
const template = `
<div class="modal fade ${dialogClass}" tabindex="-1" role="dialog" data-backdrop="static">
  <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header d-none js-modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center">
        <div class="js-loader">
          <div class="loader spin">
            <svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 7h4v2H0V7zm12 0h4v2h-4V7zm-5 5h2v4H7v-4zM7 0h2v4H7V0zM1.6 3L3 1.6 6 4.5 4.5 5.9 1.6 3zm12.8 10l-1.5 1.4-2.8-2.9 1.4-1.4 2.9 2.8zM3 14.3l-1.5-1.5 2.9-2.8 1.4 1.4L3 14.4zm8.4-8.5l-1.4-1.4L13 1.6 14.4 3 11.5 6z"/>
            </svg>
          </div>
        </div>
        <p class="js-loading-status mt-3 mb-0"></p>
        <a class="js-generated-link btn btn-primary d-none">
          <svg class="icon" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M9 22 C0 23 1 12 9 13 6 2 23 2 22 10 32 7 32 23 23 22 M11 26 L16 30 21 26 M16 16 L16 30" />
          </svg>
          <span class="align-middle">Download</span>
        </a>
      </div>
    </div>
  </div>
</div>
`

const createModal = () => {
  $(document.body).append(template)
  $modal = $(`.${dialogClass}`)
  $loader = $('.js-loader')
  $generatedLink = $('.js-generated-link')
  $loadingStatus = $('.js-loading-status')
  $modalHeader = $modal.find('.js-modal-header')

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
    .one('shown.bs.modal', () => callback())
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
