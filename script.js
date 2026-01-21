const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let stepIndex = 0;

function showSlide(index) {
  slides.forEach(slide => {
    slide.classList.remove('active');
    slide.querySelectorAll('.step').forEach(step => {
      step.classList.remove('active');
    });
  });

  slides[index].classList.add('active');
  stepIndex = 0;
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
});

document.addEventListener('click', next);

function next() {
  const steps = slides[currentSlide].querySelectorAll('.step');
  if (stepIndex < steps.length) {
    steps[stepIndex].classList.add('active');
    stepIndex++;
  } else if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

function prev() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
}

showSlide(currentSlide);
