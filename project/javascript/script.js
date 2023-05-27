let btnMenu = document.querySelector('.meenu');
let menu = document.querySelector('.background');
let x =  document.querySelector('.mobile-menu');
btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('open');
  menu.classList.toggle('open');
})
x.addEventListener('click', () => {
    menu.classList.toggle('open'); 
})