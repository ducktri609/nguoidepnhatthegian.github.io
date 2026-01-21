const slides = document.querySelectorAll('.slide');

window.addEventListener('scroll', () => {
  slides.forEach(slide => {
    const rect = slide.getBoundingClientRect();
    if (rect.top < window.innerHeight / 1.3) {
      slide.classList.add('active');
    }
  });
});
