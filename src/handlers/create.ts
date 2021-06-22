import { create } from '../api/api';
import { btnCreateCar } from '../page-garage/buttons';
import { inputAddColor, inputAddText } from '../page-garage/inputs';
import { reRendering } from './re-rendering';

let nameNewCar = '';
let colorNewCar = inputAddColor.value;

const isValidName = function isValidNameNewCar(): boolean {
  if (inputAddText.value.length > 0) {
    return true;
  }
  return false;
};

const unblockBtn = function unblockBtnCreateNewCar(): void {
  if (isValidName()) {
    btnCreateCar.disabled = false;
  } else {
    btnCreateCar.disabled = true;
  }
};

export const createCar = async function createNewCarOnPage(): Promise<void> {
  await create({ name: nameNewCar, color: colorNewCar });
  inputAddText.value = '';
  btnCreateCar.disabled = true;
  reRendering();
};

export const getNameCar = function getNameNewCar(): void {
  unblockBtn();
  nameNewCar = inputAddText.value;
};

export const getColorCar = function getColorNewCar(): void {
  colorNewCar = inputAddColor.value;
};

btnCreateCar.addEventListener('click', createCar);
inputAddText.addEventListener('input', getNameCar);
inputAddColor.addEventListener('input', getColorCar);
