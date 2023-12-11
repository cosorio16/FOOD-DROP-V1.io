const slides = document.querySelectorAll(".slide");
let currentSlideIndex = 0;

function showNextSlide() {
  const currentSlide = slides[currentSlideIndex];
  currentSlide.style.opacity = "0";

  currentSlideIndex = (currentSlideIndex + 1) % slides.length;

  const nextSlide = slides[currentSlideIndex];
  nextSlide.style.opacity = "1";

  setTimeout(showNextSlide, 3000);
}

showNextSlide();
