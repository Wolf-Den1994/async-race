import { carDiv } from '../page-garage/main';
import { objState } from '../state/general-state';
import { checkClass } from '../utils/check-class';
import { deleteCar } from './delete';

const getIdCar = function getidSelectCar(
  btn: HTMLButtonElement,
): number | undefined {
  const grandParent = btn.parentElement?.parentElement;
  if (!grandParent) throw new Error('grandParent is not found');
  return +grandParent.className.slice(-2);
};

const chooseCar = function chooseCarUsingSelect(event: Event) {
  const target = event.target as HTMLButtonElement;

  const idSelectCar = getIdCar(target);
  if (idSelectCar) {
    objState.idSelectCar = idSelectCar;
  }

  if (checkClass(target, 'btn-remove')) {
    deleteCar(objState.idSelectCar);
  }
};

carDiv.addEventListener('click', chooseCar);
