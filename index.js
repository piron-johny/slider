const container = document.querySelector('.container');
const slides = document.querySelectorAll('.slide');

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