import { gettings } from '../api/api';
import { garageObj } from '../auxiliary-objs/garage';
import { stopCar } from '../move/start-or-stop-car';
import { btnReset } from '../page-garage/buttons';
import { getElems } from '../utils/get-elems';

const resetRace = async function resetRaceOnCurrentPage(
  event: Event,
): Promise<void> {
  const target = event.target as HTMLButtonElement;
  const arrId: number[] = [];
  const answer = await gettings(garageObj.page);
  const elems = getElems();
  for (let i = 0; i < answer.data.length; i++) {
    arrId.push(answer.data[i].id);
  }

  for (let i = 0; i < arrId.length; i++) {
    elems.arrBtnsStop[i].disabled = true;
    const elementСar = <HTMLElement>elems.arrCars[i]?.lastElementChild;
    stopCar(arrId[i], target, elementСar);
  }
};

btnReset.addEventListener('click', resetRace);
