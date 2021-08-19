// ====================================================
//Modal open close
// ====================================================
const bodyContent = document.querySelector('.body-content')
const modalEmail = document.querySelector('.modal-email')
const modalVerification = document.querySelector('.modal-verification')
function openModal() {
  bodyContent.classList.add('active')
  modalEmail.classList.add('active')
}
function closeModal() {
  modalEmail.classList.remove('active')
  bodyContent.classList.remove('active')
  modalVerification.classList.remove('active')
}
function openVerification() {
  modalEmail.classList.remove('active')
  bodyContent.classList.remove('active')
  setTimeout(() => {
    bodyContent.classList.add('active')
    modalVerification.classList.add('active')
    countDown()
  }, 1000)
}
function closeVerification() {
  modalVerification.classList.remove('active')
}