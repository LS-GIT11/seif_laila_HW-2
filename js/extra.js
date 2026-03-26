//start section
const startSection = document.querySelector('#start-section');
const startButton = document.querySelector('#start-button');

function hideStartSection() {
    startSection.style.display = 'none';
}

startButton.addEventListener('click', hideStartSection);

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