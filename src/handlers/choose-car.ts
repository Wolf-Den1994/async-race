import { carDiv } from '../page-garage/main';
import { startCar, stopCar } from '../move/start-or-stop-car';
import { checkClass } from '../utils/check-class';
import { deleteCar } from './delete';
import { garageObj } from '../auxiliary-objs/garage';
import { raceObj } from '../auxiliary-objs/race';

const getIdCar = function getidSelectCar(
  btn: HTMLButtonElement,
): number | undefined {
  const grandParent = btn.parentElement?.parentElement;
  if (!grandParent) throw new Error('grandParent is not found');
  return +grandParent.className.slice(-2);
};

const chooseCar = function chooseCarUsingSelect(event: Event): void {
  const target = event.target as HTMLButtonElement;

  const idSelectCar = getIdCar(target);
  if (idSelectCar) {
    garageObj.idSelectCar = idSelectCar;
  }

  if (checkClass(target, 'btn-remove')) {
    deleteCar(garageObj.idSelectCar);
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
