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
document.querySelector('.meenu').addEventListener('click', function (event) {
    event.preventDefault(); // предотвращаем перенаправление на верх страницы
});