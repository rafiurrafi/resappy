$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  })
})

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
// ====================================================
//mobile nav
// ====================================================
const mobileContent = document.querySelector('.mobile-content')
const mobileContentClose = document.querySelector('.mobile-content__close')
function closeMobileContent() {
  mobileContent.classList.remove('active')
}
function showMobileContent() {
  mobileContent.classList.add('active')
}
