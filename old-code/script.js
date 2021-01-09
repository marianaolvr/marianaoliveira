// MENU HAMBURGER
const btnMobile = document.getElementById('btn-mobile');
const menu = document.getElementById('menu');

btnMobile.addEventListener('click', () => {
    menu.classList.toggle('show');

});