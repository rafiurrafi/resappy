// Declare variable
const numbers = document.querySelectorAll(".complex-slider__number");
const numbersContainer = document.querySelector(".complex-slider__number-area");
const imageToSlide = document.querySelector(".complex-slider__images");
const sliderContents = document.querySelectorAll(".complex-slider__content");
const sliderControls = document.querySelectorAll(".complex-slider__control");
const sliderControlContainer = document.querySelectorAll(
  ".complex-slider__controls div"
);
//slider style
const complexSliderPrev = document.querySelector("#cs-prev");
const complexSliderNext = document.querySelector("#cs-next");

//initialize slider
let currentActiveControl = 0;

for (let i = 0; i < numbers.length; i++) {
  numbers[i].style.opacity = 0;
}
numbers[0].style.opacity = 1;
var count = 0;
complexSliderPrev.style.opacity = 0;

// add next slider event handler
function nextSlide() {
  if (count > 4) {
    return;
  }
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].style.opacity = 0;
  }

  // Show item
  setTimeout(() => {
    numbers[count].style.opacity = 1;
  }, 200);

  // vertical slider
  imageToSlide.style.transform =
    "translate(" + 0 + "rem," + -(count + 1) * 37 + "rem)";

  //show contents
  for (let i = 0; i < sliderContents.length; i++)
    sliderContents[i].style.opacity = 0;
  setTimeout(() => {
    sliderContents[count].style.opacity = 1;
  }, 150);

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
  }, 700);

  //Clone the control
  const controlClone = document.querySelector(
    ".complex-slider__control--clone"
  );
  controlClone.style.transform = "translateX(" + 5.7 * (count + 1) + "rem)";

  //   increment count
  count += 1;
  currentActiveControl = count;
  complexSliderPrev.style.opacity = 1;
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

  //show contents
  for (let i = 0; i < sliderContents.length; i++)
    sliderContents[i].style.opacity = 0;
  setTimeout(() => {
    sliderContents[count].style.opacity = 1;
  }, 150);

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

  //Clone the control
  const controlClone = document.querySelector(
    ".complex-slider__control--clone"
  );
  controlClone.style.transform = "translateX(" + 5.7 * (count - 1) + "rem)";

  //   increment count
  count -= 1;
  currentActiveControl = count;
}

// direct access function
//function what happend when click on slider control
function goSlider(slideNo, evt) {
  //add active class to slider control
  // for (let i = 0; i < sliderContents.length; i++)
  //   sliderControls[i].classList.remove("active");
  // sliderControls[slideNo - 1].classList.add("active");
  //Clone the control
  const controlClone = document.querySelector(
    ".complex-slider__control--clone"
  );
  controlClone.style.transform = "translateX(" + 5.7 * (slideNo - 1) + "rem)";
  // Hide all numbers
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].style.opacity = 0;
  }
  // vertical slider
  imageToSlide.style.transform =
    "translate(" + 0 + "rem," + -(slideNo - 1) * 37 + "rem)";
  //show contents
  for (let i = 0; i < sliderContents.length; i++)
    sliderContents[i].style.opacity = 0;
  setTimeout(() => {
    sliderContents[slideNo - 1].style.opacity = 1;
    numbers[slideNo - 1].style.opacity = 1;
  }, 150);
  //clone and falling animation
  const cloneNumber = numbers[currentActiveControl].cloneNode(true);
  // if (count !== 1) cloneNumber.style.animationDelay = ".1s";
  cloneNumber.style.opacity = 1;
  if (!(count % 2))
    cloneNumber.classList.add("complex-slider__number-clone--1");
  else cloneNumber.classList.add("complex-slider__number-clone--2");
  numbersContainer.appendChild(cloneNumber);
  setTimeout(() => {
    cloneNumber.remove();
  }, 700);
  currentActiveControl = slideNo - 1;
}
