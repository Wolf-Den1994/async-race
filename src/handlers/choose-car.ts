import { carDiv } from '../page-garage/main';
import { startCar, stopCar } from '../move/start-or-stop-car';
import { checkClass } from '../utils/check-class';
import { deleteCar } from './delete';
import { garageObj } from '../auxiliary-objs/garage';
import { raceObj } from '../auxiliary-objs/race';
import { toNumber } from '../utils/toNumber';
import { inputUpColor, inputUpText } from '../page-garage/inputs';
import { btnUpdateCar } from '../page-garage/buttons';

const getIdCar = function getidSelectCar(
  btn: HTMLButtonElement,
): number | undefined {
  const grandParent = btn.parentElement?.parentElement;
  if (!grandParent) throw new Error('grandParent is not found');
  garageObj.nameSelectCar = grandParent.children[0].children[2].innerHTML;
  const idSelectCar = toNumber(grandParent.className.slice(-2));
  const indexSelectCar = garageObj.carId.indexOf(idSelectCar);
  garageObj.colorSelectCar = garageObj.carColor[indexSelectCar];
  return idSelectCar;
};

const chooseCar = function chooseCarUsingSelect(event: Event): void {
  const target = event.target as HTMLButtonElement;

  const idSelectCar = getIdCar(target);
  if (checkClass(target, 'btn-select')) {
    if (idSelectCar) {
      garageObj.idSelectCar = idSelectCar;
      inputUpText.value = garageObj.nameSelectCar;
      inputUpColor.value = garageObj.colorSelectCar;
      btnUpdateCar.disabled = false;
    }
  }

  if (checkClass(target, 'btn-remove')) {
    if (idSelectCar) {
      deleteCar(idSelectCar);
    }
  }

  if (checkClass(target, 'btn-start')) {
    raceObj.isRace = false;
    const elementСar = target.parentElement?.nextElementSibling
      ?.nextElementSibling as HTMLDivElement;
    startCar(garageObj.idSelectCar, target, elementСar);
  }

  if (checkClass(target, 'btn-stop')) {
    const elementСar = target.parentElement?.nextElementSibling
      ?.nextElementSibling as HTMLDivElement;
    stopCar(garageObj.idSelectCar, target, elementСar);
  }
};

carDiv.addEventListener('click', chooseCar);
