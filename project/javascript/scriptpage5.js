const image1 = document.getElementById('image1');

function changeImageSrc() {
  const screenSize = window.innerWidth;

  if (screenSize <= 990) { // меняем src на маленькую картинку
    image1.setAttribute('src', './image/page5-image1mobile.jpg');
  } else { // меняем src на большую картинку
    image1.setAttribute('src', './image/page5-image1.jpg');
  }
}
window.addEventListener('resize', changeImageSrc); // отслеживаем изменение размера экрана