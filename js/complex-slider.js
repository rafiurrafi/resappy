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
complexSliderPrev.style.opacity = 0;
let currentActiveControl = 0;
sliderControls[currentActiveControl].classList.add("active");

for (let i = 0; i < numbers.length; i++) {
  numbers[i].style.opacity = 0;
}
numbers[0].style.opacity = 1;
var count = 0;
console.log(numbersContainer);
//next slide function
function nextSlide(n) {
  if (count > 4) return;
  count += n;
  console.log(count);
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].style.opacity = 0;
  }
  setTimeout(() => {
    numbers[count].style.opacity = 1;
  }, 100);
  // vertical slider
  imageToSlide.style.transform =
    "translate(" + 0 + "rem," + -count * 37 + "rem)";

  //clone and falling animation
  const cloneNumber = numbers[count - 1].cloneNode(true);
  // if (count !== 1) cloneNumber.style.animationDelay = ".1s";
  cloneNumber.style.opacity = 1;
  if (!(count % 2))
    cloneNumber.classList.add("complex-slider__number-clone--1");
  else cloneNumber.classList.add("complex-slider__number-clone--2");
  numbersContainer.appendChild(cloneNumber);
  setTimeout(() => {
    cloneNumber.remove();
  }, 400);
  //slider next prev icon
  if (count == 0) complexSliderPrev.style.opacity = 0;
  else complexSliderPrev.style.opacity = 1;
  console.log(complexSliderPrev, complexSliderNext);
}
//function what happend when click on slider control
function goSlider(slideNo, evt) {
  //create slider control clone
  const cloneControl = sliderControls[currentActiveControl].cloneNode(true);
  cloneControl.classList.add("complex-slider__control--clone");
  cloneControl.style.transitionDelay = ".2s";
  cloneControl.style.transform = "translateX(" + 100 + "px)";
  sliderControlContainer[currentActiveControl].appendChild(cloneControl);

  // const cloneControl =
  //end slider control clone
  //main slider function
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].style.opacity = 0;
  }
  numbers[slideNo - 1].style.opacity = 1;
  // vertical slider
  imageToSlide.style.transform =
    "translate(" + 0 + "rem," + -(slideNo - 1) * 37 + "rem)";
}

//function on active slide control
