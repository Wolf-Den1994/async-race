import { ARR_BRAND_CAR, ARR_MODEL_CAR } from '../utils/const';

const range = 20;
const format = 16;

const randomNum = function generateRandomNumber(): number {
  return Math.floor(Math.random() * range);
};

export const shuffle = function shuffleBrandAndModelCars(): string {
  return `${ARR_BRAND_CAR[randomNum()]} ${ARR_MODEL_CAR[randomNum()]}`;
};

export const randomColor = function generateRandomHexColor(): string {
  return `#${`${Math.random().toString(format)}000000`.substring(2, 8)}`;
};
