import { update } from '../api/api';
import { garageObj } from '../auxiliary-objs/garage';
import { btnUpdateCar } from '../page-garage/buttons';
import { inputUpColor, inputUpText } from '../page-garage/inputs';
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
  for (let i = 0; i < garageObj.carId.length; i++) {
    if (garageObj.carId[i] === garageObj.idSelectCar) {
      flag = true;
    }
  }
  return flag;
};

const updateCar = async function updateCarOnPage(): Promise<void> {
  if (doesRequiredElem()) {
    nameUpdateCar = garageObj.nameSelectCar;
    colorUpdateCar = garageObj.colorSelectCar;
    await update(
      { name: nameUpdateCar, color: colorUpdateCar },
      garageObj.idSelectCar,
    );
    inputUpText.value = '';
    btnUpdateCar.disabled = true;
    reRendering();
  }
};

const getNameCar = function getNameNewCar(): void {
  unblockBtn();
  garageObj.nameSelectCar = inputUpText.value;
};

const getColorCar = function getColorNewCar(): void {
  garageObj.colorSelectCar = inputUpColor.value;
};

btnUpdateCar.addEventListener('click', updateCar);
inputUpText.addEventListener('input', getNameCar);
inputUpColor.addEventListener('input', getColorCar);
