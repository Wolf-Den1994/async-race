import { ARR_BRAND_CAR, ARR_MODEL_CAR } from '../utils/const';

const randomNum = function generateRandomNumber(): number {
  return Math.floor(Math.random() * 21);
};

export const shuffle = function shuffleBrandAndModelCars(): string {
  return `${ARR_BRAND_CAR[randomNum()]  } ${  ARR_MODEL_CAR[randomNum()]}`;
};

const randomShade = function generateRandomShade(): number {
  return Math.floor(Math.random() * 256);
};

export const randomColor = function generateRandomHexColor(): string {
  return (
    `#${ 
      randomShade().toString(16) 
    }${randomShade().toString(16) 
    }${randomShade().toString(16)}`
  );
};
