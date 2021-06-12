import { update } from '../api/api';
import { btnUpdateCar } from '../page-garage/buttons';
import { inputUpColor, inputUpText } from '../page-garage/inputs';
import { objState } from '../state/general-state';
import { reRendering } from './re-rendering';

let nameUpdateCar = '';
let colorUpdateCar = inputUpColor.value;

const isValidName = function isValidNameUpdateCar(): boolean {
  if (inputUpText.value.length > 0) {
    return true;
  }
  return false;
};

const unblockBtn = function unblockBtnUpdateCar(): void {
  if (isValidName()) {
    btnUpdateCar.disabled = false;
  } else {
    btnUpdateCar.disabled = true;
  }
};

const doesRequiredElem = function doesRequiredElemExistInArray(): boolean {
  let flag = false;
  for (let i = 0; i < objState.carId.length; i++) {
    if (objState.carId[i] === objState.idSelectCar) {
      flag = true;
    }
  }
  return flag;
};

const updateCar = function updateCarOnPage(): void {
  if (doesRequiredElem()) {
    update(
      { name: nameUpdateCar, color: colorUpdateCar },
      objState.idSelectCar,
    );
    inputUpText.value = '';
    btnUpdateCar.disabled = true;
    reRendering();
  }
};

const getNameCar = function getNameNewCar(): void {
  unblockBtn();
  nameUpdateCar = inputUpText.value;
};

const getColorCar = function getColorNewCar(): void {
  colorUpdateCar = inputUpColor.value;
};

btnUpdateCar.addEventListener('click', updateCar);
inputUpText.addEventListener('input', getNameCar);
inputUpColor.addEventListener('input', getColorCar);
