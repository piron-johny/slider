function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function sliderPlagin(activeSlide) {
  const container = document.querySelector('.container');
  const slides = document.querySelectorAll('.slide');

  slides[activeSlide].classList.add('active');


  container.addEventListener('click', onCickSlides)

  function onCickSlides(e) {
    if (e.target.nodeName === 'DIV') {
      revoveClassActive()
      e.target.classList.add('active')
    }
    slide.classList.add('active')
  }

  function revoveClassActive() {
    slides.forEach(slide => slide.classList.remove('active'))
  }
}

sliderPlagin(getRandomInt(5))

console.log(getRandomInt(5));
