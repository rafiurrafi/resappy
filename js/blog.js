// const blogContentMenu = document.querySelectorAll('.blog-content__menu a')
// const allBlogsLink = document.querySelector('.all-blogs')
// const blogControls = document.querySelector('.blog-controls')

// blogContentMenu.forEach((menu) => {
//   menu.addEventListener('click', () => {
//     blogContentMenu.forEach((item) => {
//       item.classList.remove('active')
//     })
//     menu.classList.add('active')
//   })
// })

// var $grid = $('.blog-content__box').isotope({
//   // options
// })
// // filter items on button click
// $('.blog-content__menu').on('click', 'a', function () {
//   var filterValue = $(this).attr('data-filter')
//   $grid.isotope({ filter: filterValue })
//   //show the controls
//   if (allBlogsLink.classList.contains('active')) {
//     blogControls.classList.remove('d-none')
//   } else {
//     blogControls.classList.add('d-none')
//   }
// })

// ====================================================
//Modal open close
// ====================================================
const bodyContent = document.querySelector(".body-content");
const modalEmail = document.querySelector(".modal-email");
const modalVerification = document.querySelector(".modal-verification");
function openModal() {
  console.log("hello");
  bodyContent.classList.add("active");
  modalEmail.classList.add("active");
}
function closeModal() {
  modalEmail.classList.remove("active");
  bodyContent.classList.remove("active");
  modalVerification.classList.remove("active");
}
function openVerification() {
  modalEmail.classList.remove("active");
  bodyContent.classList.remove("active");
  setTimeout(() => {
    bodyContent.classList.add("active");
    modalVerification.classList.add("active");
    countDown();
  }, 1000);
}
function closeVerification() {
  modalVerification.classList.remove("active");
}
// ====================================================
//mobile nav
// ====================================================
const mobileContent = document.querySelector(".mobile-content");
const mobileContentClose = document.querySelector(".mobile-content__close");
function closeMobileContent() {
  mobileContent.classList.remove("active");
}
function showMobileContent() {
  mobileContent.classList.add("active");
}
