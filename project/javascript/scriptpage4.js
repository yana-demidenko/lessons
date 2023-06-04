let btnMenu = document.querySelector('.meenu');
let menu = document.querySelector('.background');
let x = document.querySelector('.mobile-menu');
btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('open');
  menu.classList.toggle('open');
})
x.addEventListener('click', () => {
  menu.classList.toggle('open');
})
document.querySelector('.meenu').addEventListener('click', function(event) {
  event.preventDefault(); // предотвращаем перенаправление на верх страницы
});

const image1 = document.getElementById('image1');

function changeImageSrc() {
    const screenSize = window.innerWidth;

    if (screenSize <= 1020) { // меняем src на маленькую картинку
        image1.setAttribute('src', './image/page4-image-mobile.webp');
    } else { // меняем src на большую картинку
        image1.setAttribute('src', './image/page4-image-1.webp');
    }
}
window.addEventListener('resize', changeImageSrc); // отслеживаем изменение размера экрана

var swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 5,
 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: { 
    240: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 5
    },
    830: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1145: {
      slidesPerView: 4,
      spaceBetween: 5
    },
  }
});