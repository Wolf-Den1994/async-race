import { create } from '../api/api';
import { btnCreateCar } from '../page-garage/buttons';
import { inputAddColor, inputAddText } from '../page-garage/inputs';
import { carDiv } from '../page-garage/main';
import { objGeneralState } from '../state/general-state';
import { gettingsCars } from './gets-all';

let nameNewCar = '';
let colorNewCar = '';

const createCar = function createNewCarOnPage() {
  create({ name: nameNewCar, color: colorNewCar });
  // console.log(objGeneralState);
  objGeneralState.carsCout = 0;
  objGeneralState.carsCountColor = 0;
  objGeneralState.carColor = [];
  carDiv.innerHTML = '';
  gettingsCars();
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
