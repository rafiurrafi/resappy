const numbers = document.querySelectorAll(".complex-slider__number");
const numbersContainer = document.querySelector(".complex-slider__number-area");
const imageToSlide = document.querySelector(".complex-slider__images");

for (let i = 0; i < numbers.length; i++) {
  numbers[i].style.opacity = 0;
}
numbers[0].style.opacity = 1;
var count = 0;
console.log(count);
function nextSlide(n) {
  if (count > 4) return;
  count++;
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].style.opacity = 0;
  }
  setTimeout(() => {
    numbers[count].style.opacity = 1;
  }, 100);
  const cloneNumber = numbers[count - 1].cloneNode(true);
  cloneNumber.style.opacity = 1;
  if (!(count % 2))
    cloneNumber.classList.add("complex-slider__number-clone--1");
  else cloneNumber.classList.add("complex-slider__number-clone--2");
  numbersContainer.appendChild(cloneNumber);
  setTimeout(() => {
    cloneNumber.remove();
  }, 400);
}
