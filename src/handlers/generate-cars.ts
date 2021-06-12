import { create } from '../api/api';
import { randomColor, shuffle } from '../generator/random-car';
import { btnGenerateCars } from '../page-garage/buttons';
import { reRendering } from './re-rendering';

const GENERATION_NUMBER = 100;

const generateCars = function generateOneHungredCars(): void {
  for (let i = 0; i < GENERATION_NUMBER; i++) {
    create({ name: shuffle(), color: randomColor() });
  }
  reRendering();
};

btnGenerateCars.addEventListener('click', generateCars);
