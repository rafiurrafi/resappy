// Declare variable
const numbers = document.querySelectorAll(".complex-slider__number");
const numbersContainer = document.querySelector(".complex-slider__number-area");
const imageToSlide = document.querySelector(".complex-slider__images");
const sliderControls = document.querySelectorAll(".complex-slider__control");
const sliderControlContainer = document.querySelectorAll(
  ".complex-slider__controls div"
);
//slider style
const complexSliderPrev = document.querySelector("#cs-prev");
const complexSliderNext = document.querySelector("#cs-next");

//initialize slider
let currentActiveControl = 0;
sliderControls[currentActiveControl].classList.add("active");

for (let i = 0; i < numbers.length; i++) {
  numbers[i].style.opacity = 0;
}
numbers[0].style.opacity = 1;
var count = 0;

// add next slider event handler
function nextSlide() {
  if (count > 4) return;
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].style.opacity = 0;
  }

  // Show item
  setTimeout(() => {
    numbers[count].style.opacity = 1;
  }, 150);

  // vertical slider
  imageToSlide.style.transform =
    "translate(" + 0 + "rem," + -(count + 1) * 37 + "rem)";

  //clone and falling animation
  const cloneNumber = numbers[count].cloneNode(true);
  // if (count !== 1) cloneNumber.style.animationDelay = ".1s";
  cloneNumber.style.opacity = 1;
  if (!(count % 2))
    cloneNumber.classList.add("complex-slider__number-clone--1");
  else cloneNumber.classList.add("complex-slider__number-clone--2");
  numbersContainer.appendChild(cloneNumber);
  setTimeout(() => {
    cloneNumber.remove();
  }, 800);
  //   increment count
  count += 1;
}

// add pev slider event handler
function prevSlide() {
  if (count <= 0) return;
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].style.opacity = 0;
  }
  setTimeout(() => {
    numbers[count].style.opacity = 1;
  }, 150);
  // vertical slider
  imageToSlide.style.transform =
    "translate(" + 0 + "rem," + -(count - 1) * 37 + "rem)";
  //clone and falling animation
  const cloneNumber = numbers[count].cloneNode(true);
  // if (count !== 1) cloneNumber.style.animationDelay = ".1s";
  cloneNumber.style.opacity = 1;
  if (!(count % 2))
    cloneNumber.classList.add("complex-slider__number-clone--1");
  else cloneNumber.classList.add("complex-slider__number-clone--2");
  numbersContainer.appendChild(cloneNumber);
  setTimeout(() => {
    cloneNumber.remove();
  }, 400);
  //   increment count
  count -= 1;
}
