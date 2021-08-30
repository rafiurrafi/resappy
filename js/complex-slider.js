const numbers = document.querySelectorAll(".complex-slider__number");
const numbersContainer = document.querySelector(".complex-slider__number-area");
const imageToSlide = document.querySelector(".complex-slider__images");

for (let i = 0; i < numbers.length; i++) {
  numbers[i].style.opacity = 0;
}
numbers[0].style.opacity = 1;
var count = 0;
//next slide function
function nextSlide(n) {
  if (count > 4) return;
  count += n;
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
  if (count !== 1) cloneNumber.style.animationDelay = ".1s";
  cloneNumber.style.opacity = 1;
  if (!(count % 2))
    cloneNumber.classList.add("complex-slider__number-clone--1");
  else cloneNumber.classList.add("complex-slider__number-clone--2");
  numbersContainer.appendChild(cloneNumber);
  setTimeout(() => {
    cloneNumber.remove();
  }, 400);
}
function goSlider(slideNo) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].style.opacity = 0;
  }
  numbers[slideNo - 1].style.opacity = 1;
  // vertical slider
  imageToSlide.style.transform =
    "translate(" + 0 + "rem," + -(slideNo - 1) * 37 + "rem)";
}
