import { create } from '../api/api';
import { btnCreateCar } from '../page-garage/buttons';
import { inputAddColor, inputAddText } from '../page-garage/inputs';
import { reRendering } from './re-rendering';

let nameNewCar = '';
let colorNewCar = '';

const createCar = function createNewCarOnPage() {
  create({ name: nameNewCar, color: colorNewCar });
  // console.log(objGeneralState);
  reRendering();
};

const getNameCar = function getNameNewCar() {
  nameNewCar = inputAddText.value;
};

const getColorCar = function getColorNewCar() {
  colorNewCar = inputAddColor.value;
};

btnCreateCar.addEventListener('click', createCar);
inputAddText.addEventListener('input', getNameCar);
inputAddColor.addEventListener('input', getColorCar);
