//start section
const startSection = document.querySelector('#start-section');
const startButton = document.querySelector('#start-button');

function hideStartSection() {
    startSection.style.display = 'none';
}

startButton.addEventListener('click', hideStartSection);

//menu toggle
const menuToggle = document.querySelector('#menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('hidden');
});