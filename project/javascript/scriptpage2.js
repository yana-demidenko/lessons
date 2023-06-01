const image = document.getElementById('image1');

function changeImageSrc() {
  const screenSize = window.innerWidth;

  if (screenSize <= 570) { // меняем src на маленькую картинку
    image.setAttribute('src', './image/page1mobile.webp');
  } else { // меняем src на большую картинку
    image.setAttribute('src', './image/page1.webp');
  }
}
window.addEventListener('resize', changeImageSrc); // отслеживаем изменение размера экрана