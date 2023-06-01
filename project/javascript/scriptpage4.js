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