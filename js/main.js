import { Counter, StepCounter } from './counter.js';

const counter1 = new Counter('#counter-container1', 0);
const counter2 = new Counter('#counter-container2', 2);
const counter3 = new Counter('#counter-container3', 5);
const counter4 = new StepCounter('#counter-container-super', 1, 10);

//const step10 - new SuperCounter(id, startingValue, step); 