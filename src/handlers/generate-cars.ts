import { create } from '../api/api';
import { randomColor, shuffle } from '../generator/random-car';
import { btnGenerateCars } from '../page-garage/buttons';
import { reRendering } from './re-rendering';

const GENERATION_NUMBER = 100;

export const generateCars = async function generateOneCars(): Promise<void> {
  const cars = [];
  for (let i = 0; i < GENERATION_NUMBER; i++) {
    cars.push(create({ name: shuffle(), color: randomColor() }));
  }
  await Promise.all(cars);
  reRendering();
};

btnGenerateCars.addEventListener('click', generateCars);
