const numbers = document.querySelectorAll(".complex-slider__number");
const texts = document.querySelectorAll(".complex-slider__text");
const numberContainer = document.querySelector(".complex-slider__number-box");

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));

  //faalling
  const cloneNumber = numbers[n - 1].cloneNode(true);
  cloneNumber.style.color = "red";
  cloneNumber.className == "complex-slider__number-clone";
  cloneNumber.style.animationName = "moveToBottom";
  numberContainer.appendChild(cloneNumber);
  console.log(cloneNumber);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  // var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");

  if (n > 5) {
    return;
  }

  for (i = 0; i < numbers.length; i++) {
    numbers[i].style.opacity = 0;
    numbers[i].style.visibility = "hidden";
    texts[i].style.opacity = 0;
    numbers[i].style.visibility = "hidden";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }

  numbers[slideIndex - 1].style.opacity = 1;
  numbers[slideIndex - 1].style.visibility = "visible";
  texts[slideIndex - 1].style.opacity = 1;
  numbers[slideIndex - 1].style.visibility = "visible";
}
