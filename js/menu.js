//menu toggle
const menuToggle = document.querySelector('#menu-toggle');
const headerElement = document.querySelector('header');
const nav = document.querySelector('nav');
const closeButton = document.querySelector('.close-menu');

menuToggle.addEventListener('click', () => {
    headerElement.classList.toggle('nav-open');
});

function menuClose() {
    headerElement.classList.remove('nav-open');
}
closeButton.addEventListener('click', menuClose);