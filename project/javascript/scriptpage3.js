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

const video = document.getElementById('video');

function changeVideoSrc() {
    const screenSize = window.innerWidth;

    if (screenSize < 1180) { // меняем src на маленькую картинку
        video.setAttribute('src', './video/mobile.webm');
    } else { // меняем src на большую картинку
        video.setAttribute('src', './video/recharge-hero-video-21_9_webm.webm');
    }
}
window.addEventListener('resize', changeVideoSrc); // отслеживаем изменение размера экрана

const image1 = document.getElementById('image1');

function changeImageSrc() {
    const screenSize = window.innerWidth;

    if (screenSize <= 690) { // меняем src на маленькую картинку
        image1.setAttribute('src', './image/page3-image-1mobile.webp');
    } else { // меняем src на большую картинку
        image1.setAttribute('src', './image/page3-image-1.webp');
    }
}
window.addEventListener('resize', changeImageSrc); // отслеживаем изменение размера экрана

const image10 = document.getElementById('image10');

function changeImage2Src() {
    const screenSize = window.innerWidth;

    if (screenSize <= 840) { // меняем src на маленькую картинку
        image10.setAttribute('src', './image/page3-image-4mobile.webp');
    } else { // меняем src на большую картинку
        image10.setAttribute('src', './image/page3-image-4.webp');
    }
}
window.addEventListener('resize', changeImage2Src); // отслеживаем изменение размера экрана




let blockList = document.querySelectorAll('.question'); // получаем все блоки с классом question
let currentP; // здесь будет храниться текущий открытый p

// функция, которая открывает p при клике на ссылку
function showP(event) {
  event.preventDefault(); // предотвращаем переход по ссылке

  let link = event.target; // получаем ссылку, на которую кликнули
  let block = link.closest('.question'); // получаем родительский блок, в котором находится ссылка
  let p = block.querySelector('p'); // находим элемент p в родительском блоке
  let image = block.querySelector('img'); // находим элемент span в родительском блоке
  
   // если текущий открытый p не равен текущей p, то закрываем его и открываем новый
      if (currentP && currentP !== p) {
        currentP.style.display = 'none'; // закрываем текущий p
        currentP = null; // обнуляем текущий p
      }

  if (!p.style.display || p.style.display === 'none') { // если p не отображается
    p.style.display = 'block'; // открываем
    currentP = p; // запоминаем текущий открытый p
    image.style.transform = 'rotate(180deg)'
  } else {
    p.style.display = 'none'; // закрываем
    currentP = null; // обнуляем текущий открытый p
    image.style.transform = 'rotate(360deg)'
  }
}
// навешиваем обработчик клика на каждую ссылку
for (let i = 0; i < blockList.length; i++) {
  let links = blockList[i].querySelectorAll('.link'); // получаем все блоки с классом link в блоке

  for (let j = 0; j < links.length; j++) {
    let link = links[j];
    link.addEventListener('click', showP);
  }
}