const image = document.getElementById('image1');

function changeImageSrc() {
  const screenSize = window.innerWidth;

  if (screenSize <= 1080) { // меняем src на маленькую картинку
    image.setAttribute('src', './image/banner-2.webp');
  } else { // меняем src на большую картинку
    image.setAttribute('src', './image/banner.webp');
  }
  if (screenSize <= 980) { // меняем src на маленькую картинку
    image.setAttribute('src', './image/banner-3.webp');
  } else { // меняем src на большую картинку
    image.setAttribute('src', './image/banner-2.webp');
  }

}

window.addEventListener('resize', changeImageSrc); // отслеживаем изменение размера экрана

const image5 = document.getElementById('image5');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image7 = document.getElementById('image7');
const image8 = document.getElementById('image8');

function changeImage2Src() {
  const screenSize = window.innerWidth;

  if (screenSize <= 690) { // меняем src на маленькую картинку
    image5.setAttribute('src', './image/block5mobile.webp');
    image2.setAttribute('src', './image/image2mobile.webp');
    image3.setAttribute('src', './image/image3mobile.webp');
    image4.setAttribute('src', './image/image4mobile.webp');
    image7.setAttribute('src', './image/image7mobile.webp');
    image8.setAttribute('src', './image/image8mobile.webp');

  } else { // меняем src на большую картинку
    image5.setAttribute('src', './image/block5.webp');
    image2.setAttribute('src', './image/black-car.webp');
    image3.setAttribute('src', './image/white-car.webp');
    image4.setAttribute('src', './image/woman-and-car.webp');
    image7.setAttribute('src', './image/third-section-white-car.webp');
    image8.setAttribute('src', './image/third-section-grey-car.webp');
  }
}

window.addEventListener('resize', changeImage2Src); // отслеживаем изменение размера экрана

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