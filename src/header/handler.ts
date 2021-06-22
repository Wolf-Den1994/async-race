import { winnersObj } from '../auxiliary-objs/winners';
import { chooseCar } from '../handlers/choose-car';
import { createCar, getColorCar, getNameCar } from '../handlers/create';
import { generateCars } from '../handlers/generate-cars';
import { getColor, getName, updateCar } from '../handlers/update';
import {
  btnCreateCar,
  btnGenerateCars,
  btnRace,
  btnReset,
  btnUpdateCar,
} from '../page-garage/buttons';
import { garage } from '../page-garage/garage';
import {
  inputAddColor,
  inputAddText,
  inputUpColor,
  inputUpText,
} from '../page-garage/inputs';
import { carDiv } from '../page-garage/main';
import { winners } from '../page-winners/winners';
import { cellTime, cellWins } from '../page-winners/winners-table';
import { startRace } from '../race/race';
import { resetRace } from '../race/reset';
import { checkClass } from '../utils/check-class';
import { limitWinners } from '../utils/const';
import { Arrow, ElemClasses, StateTable, TextUnsorted } from '../utils/enums';
import { updateClassList } from '../utils/update-class';
import { preparationWins } from '../win/rendering-winners';
import { btnToGarage, btnToWinners } from './buttons';

const isUnsort = function isUnsortedByDecreaseAndDecrease() {
  if (
    !checkClass(cellTime, StateTable.Decrease) &&
    !checkClass(cellTime, StateTable.Increase) &&
    !checkClass(cellWins, StateTable.Decrease) &&
    !checkClass(cellWins, StateTable.Increase)
  ) {
    return true;
  }
  return false;
};

const showPageWinners = function showPageWinnersNow(): void {
  if (checkClass(winners, ElemClasses.Hidden)) {
    updateClassList(garage, winners, ElemClasses.Hidden);
    preparationWins(
      winnersObj.page,
      limitWinners,
      winnersObj.sort,
      winnersObj.order,
    );
    if (isUnsort()) {
      cellWins.innerHTML = TextUnsorted.WINS;
      cellTime.innerHTML = TextUnsorted.TIME;
    } else if (checkClass(cellWins, StateTable.Decrease)) {
      cellWins.innerHTML = `${TextUnsorted.WINS} ${Arrow.Up}`;
    } else if (checkClass(cellWins, StateTable.Increase)) {
      cellWins.innerHTML = `${TextUnsorted.WINS} ${Arrow.Down}`;
    } else if (checkClass(cellTime, StateTable.Decrease)) {
      cellTime.innerHTML = `${TextUnsorted.TIME} ${Arrow.Up}`;
    } else if (checkClass(cellTime, StateTable.Increase)) {
      cellTime.innerHTML = `${TextUnsorted.TIME} ${Arrow.Down}`;
    }
    btnGenerateCars.removeEventListener('click', generateCars);
    carDiv.removeEventListener('click', chooseCar);
    btnCreateCar.removeEventListener('click', createCar);
    inputAddText.removeEventListener('input', getNameCar);
    inputAddColor.removeEventListener('input', getColorCar);
    btnUpdateCar.removeEventListener('click', updateCar);
    inputUpText.removeEventListener('input', getName);
    inputUpColor.removeEventListener('input', getColor);
    btnToGarage.addEventListener('click', showPageGarage);
    btnToWinners.removeEventListener('click', showPageWinners);
    btnRace.removeEventListener('click', startRace);
    btnReset.removeEventListener('click', resetRace);
  }
};

const showPageGarage = function showPageGarageNow(): void {
  if (checkClass(garage, ElemClasses.Hidden)) {
    updateClassList(winners, garage, ElemClasses.Hidden);
    btnGenerateCars.addEventListener('click', generateCars);
    carDiv.addEventListener('click', chooseCar);
    btnCreateCar.addEventListener('click', createCar);
    inputAddText.addEventListener('input', getNameCar);
    inputAddColor.addEventListener('input', getColorCar);
    btnUpdateCar.addEventListener('click', updateCar);
    inputUpText.addEventListener('input', getName);
    inputUpColor.addEventListener('input', getColor);
    btnToWinners.addEventListener('click', showPageWinners);
    btnToGarage.removeEventListener('click', showPageGarage);
    btnRace.addEventListener('click', startRace);
    btnReset.addEventListener('click', resetRace);
  }
};

btnToWinners.addEventListener('click', showPageWinners);
