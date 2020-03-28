const main = document.querySelector('.main-img img')
const images = document.querySelectorAll('.imgs img')
const opacity = 0.6

images.forEach(image => image.addEventListener('click', imageClick));

function imageClick(e) {
  images.forEach(image => image.style.opacity = 1);
  this.style.opacity = opacity
  
  main.src = this.src
  main.classList.add('fade-in')
  setTimeout(() => {
    main.classList.remove('fade-in')
  }, 300);
}

images[0].style.opacity = opacity