import { create } from '../api/api';
import { btnCreateCar } from '../page-garage/buttons';
import { inputAddColor, inputAddText } from '../page-garage/inputs';
import { reRendering } from './re-rendering';

let nameNewCar = '';
let colorNewCar = inputAddColor.value;

const isValidName = function isValidNameNewCar() {
  if (inputAddText.value.length > 0) {
    return true;
  }
  return false;
};

const unblockBtn = function unblockBtnCreateNewCar() {
  if (isValidName()) {
    btnCreateCar.disabled = false;
  } else {
    btnCreateCar.disabled = true;
  }
};

const createCar = function createNewCarOnPage() {
  create({ name: nameNewCar, color: colorNewCar });
  reRendering();
};

const getNameCar = function getNameNewCar() {
  unblockBtn();
  nameNewCar = inputAddText.value;
};

const getColorCar = function getColorNewCar() {
  colorNewCar = inputAddColor.value;
};

btnCreateCar.addEventListener('click', createCar);
inputAddText.addEventListener('input', getNameCar);
inputAddColor.addEventListener('input', getColorCar);
