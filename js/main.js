import { Counter, StepCounter } from './counter.js';

const counter1 = new Counter('#counter-container1', 0);
const counter2 = new Counter('#counter-container2', 2);
const counter3 = new Counter('#counter-container3', 5);
const counter4 = new StepCounter('#counter-container-super', 1, 10);

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