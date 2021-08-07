// $(document).ready(function () {
// ready

// const items = [
//   {
//     img: "img/icons/1.svg",
//     heading: "Item 1",
//     paragraph:
//       " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hicpariatur fugit vel at, quibusdam excepturi.",
//     link: "#",
//     filter: "marketing",
//   },
//   {
//     img: "img/icons/1.svg",
//     heading: "Item 2",
//     paragraph:
//       " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hicpariatur fugit vel at, quibusdam excepturi.",
//     link: "#",
//     filter: "sales",
//   },
//   {
//     img: "img/icons/1.svg",
//     heading: "Item 3",
//     paragraph:
//       " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hicpariatur fugit vel at, quibusdam excepturi.",
//     link: "#",
//     filter: "marketing",
//   },
//   {
//     img: "img/icons/1.svg",
//     heading: "Item 4",
//     paragraph:
//       " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hicpariatur fugit vel at, quibusdam excepturi.",
//     link: "#",
//     filter: "integration",
//   },
//   {
//     img: "img/icons/1.svg",
//     heading: "Item 5",
//     paragraph:
//       " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hicpariatur fugit vel at, quibusdam excepturi.",
//     link: "#",
//     filter: "design",
//   },
//   {
//     img: "img/icons/1.svg",
//     heading: "Item 6",
//     paragraph:
//       " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hicpariatur fugit vel at, quibusdam excepturi.",
//     link: "#",
//     filter: "crm",
//   },
// ];
// ====================================================
//Waypoint - sticky
// ====================================================
$('.section-intro').waypoint(
  function (direction) {
    if (direction == 'down') {
      $('.main-nav').addClass('sticky')
    } else {
      $('.main-nav').removeClass('sticky')
    }
  },
  {
    offset: '50px',
  },
)
// ====================================================
//add filter functionality
// =======================================================

// ====================================================
//add active class to button filter in feature section
// =======================================================
//declare variable
const buttons = document.querySelectorAll('.buttons a')
let features = document.querySelectorAll('.feature')
const showAllButton = document.querySelector('.show-all-button')
const loadMoreButton = document.querySelector('.load-more-button')

// Load for the first Time
for (let i = 6; i < features.length; i++) {
  features[i].classList.add('d-none')
}
//show laod more button
loadMoreButton.classList.remove('d-none')
getIsotopCode()

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    //remove active class
    buttons.forEach((btn) => {
      btn.classList.remove('active')
    })
    //add active class
    button.classList.add('active')

    //add load more feature
    if (showAllButton.classList.contains('active')) {
      for (let i = 6; i < features.length; i++) {
        features[i].classList.add('d-none')
      }
      //show laod more button
      loadMoreButton.classList.remove('d-none')
      loadMoreButton.innerHTML = 'Load more'

      getIsotopCode()
    } else {
      features.forEach((elem) => {
        elem.classList.remove('d-none')
      })
      loadMoreButton.classList.add('d-none')
      getIsotopCode()
    }
  }) //end of event listener
})

//load more button execution

loadMoreButton.addEventListener('click', () => {
  if (loadMoreButton.innerHTML == 'Load more') {
    loadMoreButton.innerHTML = 'Show less'
    features.forEach((feature) => {
      feature.classList.remove('d-none')
    })
    getIsotopCode()
  } else {
    loadMoreButton.innerHTML = 'Load more'
    for (let i = 6; i < features.length; i++) {
      features[i].classList.add('d-none')
    }
    getIsotopCode()
  }
})

//Isotop  playground
function getIsotopCode() {
  var $grid = $('.features').isotope({
    // options
  })
  // filter items on button click
  $('.buttons').on('click', 'a', function () {
    var filterValue = $(this).attr('data-filter')
    $grid.isotope({ filter: filterValue })
  })
}

// ====================================================
//slider -----------😥😥😥😥😥😛😛😛😌-------------
// =======================================================
//slider ---image
var showed_box = 0

function next() {
  showed_box += -40

  if (showed_box < -80) showed_box = -80
  document.querySelector('.slider__img-container').style.transform =
    'translateY(' + showed_box + 'vw)'
}

function prev() {
  showed_box += 40

  if (showed_box > 0) showed_box = 0
  document.querySelector('.slider__img-container').style.transform =
    'translateY(' + showed_box + 'vw)'
}

// slider text
var slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n))
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  var i = 0
  var slides = document.querySelectorAll('.slider__text')
  if (n > slides.length) {
    // slideIndex = 1;
    slideIndex = slides.length
  }
  if (n < 1) {
    // slideIndex = slides.length;
    slideIndex = 1
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active')
  }
  slides[slideIndex - 1].classList.add('active')
}
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
//slider icon
// ====================================================
// let slideNumber = 0;
const slideLeftIcon = document.querySelector('.slider__controls a:first-child')
const slideRightIcon = document.querySelector('.slider__controls a:last-child')
let stageNumber = 0
function increaseSlideNumber() {
  if (stageNumber == 2) return
  stageNumber++
  if (stageNumber == 1) {
    slideLeftIcon.classList.add('stage-1')
    slideLeftIcon.classList.remove('stage-2')
    slideLeftIcon.classList.remove('stage-3')
    slideRightIcon.classList.remove('stage-2')
  } else if (stageNumber == 2) {
    slideLeftIcon.classList.remove('stage-1')
    slideLeftIcon.classList.remove('stage-3')
    slideLeftIcon.classList.add('stage-2')
    slideRightIcon.classList.add('stage-1')
    setTimeout(() => {
      slideRightIcon.classList.remove('stage-1')
      slideLeftIcon.classList.add('stage-3')
      slideRightIcon.classList.add('stage-2')
    }, 700)
  }
}

function decreaseSlideNumber() {
  stageNumber--
  if (stageNumber == 1) {
    slideLeftIcon.classList.add('stage-1')
    slideLeftIcon.classList.remove('stage-2')
    slideLeftIcon.classList.remove('stage-3')
    slideRightIcon.classList.remove('stage-2')
  }
  if (stageNumber == 0) {
    slideRightIcon.classList.remove('stage-1')
    slideRightIcon.classList.remove('stage-2')
    slideLeftIcon.classList.remove('stage-1')
    slideLeftIcon.classList.remove('stage-2')
    slideLeftIcon.classList.remove('stage-3')
  }
}

// ====================================================
//typed js
// ====================================================
var typed3 = new Typed('#typing', {
  strings: ['service', 'experience'],
  typeSpeed: 40,
  backSpeed: 40,
  smartBackspace: true, // this is a default
  loop: true,
})
// ====================================================
//Load more
// ====================================================
// const exploreMoreButton = document.querySelector("#explore-more");
// const featureContainer = document.querySelector(".features");
// exploreMoreButton.addEventListener("click", function () {
//   if (this.innerText == "Explore more") {
//     this.innerText = "Show less";
//     items.forEach((item) => {
//       const element = document.createElement("div");
//       element.classList.add("feature");
//       element.classList.add("feature-del");
//       element.setAttribute("data-item", item.filter);
//       element.innerHTML = `
//       <img src="${item.img}" class="feature__icon" alt="" />
//               <h4 class="heading-tetra u-mb-sm">${item.heading}</h4>
//               <p class="feature__text u-mb-md">
//                ${item.paragraph}
//               </p>
//               <a href="${item.link}" class="btn btn--learn">Learn more &rarr;</a>
//       `;
//       featureContainer.appendChild(element);
//     });
//   } else if (this.innerText == "Show less") {
//     this.innerText = "Explore more";
//     const deletedFeature = document.querySelectorAll(".feature-del");
//     deletedFeature.forEach((item) => {
//       item.remove();
//     });
//   }
//   features = document.querySelectorAll(".feature");
// });
// End of ready
// });
//helper
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
// ====================================================
//Cound down
// ====================================================
function countDown() {
  let time = 80
  const minuteDom = document.querySelector('#minute')
  const secondDom = document.querySelector('#second')
  let timerId = setInterval(() => {
    time--
    const minutes = Math.floor(time / 60)
    const second = Math.floor(time % 60)
    minuteDom.innerHTML = minutes
    secondDom.innerHTML = second
    if (time === 0) clearInterval(timerId)
  }, 1000)
}
// ====================================================
//Filter in blog page
// ====================================================
