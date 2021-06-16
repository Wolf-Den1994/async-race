import { gettings } from '../api/api';
import { garageObj } from '../auxiliary-objs/garage';
import { raceObj } from '../auxiliary-objs/race';
import { startCar } from '../move/start-or-stop-car';
import { btnRace } from '../page-garage/buttons';
import { getElems } from '../utils/get-elems';

const startRace = async function startRaceOnCurrentPage(
  event: Event,
): Promise<void> {
  raceObj.isRace = true;
  raceObj.arrIdCar = [];
  const target = event.target as HTMLButtonElement;
  const answer = await gettings(garageObj.page);
  const arrId: number[] = [];
  const elems = getElems();
  for (let i = 0; i < answer.data.length; i++) {
    arrId.push(answer.data[i].id);
    raceObj.arrIdCar.push(answer.data[i].id);
  }
  for (let i = 0; i < arrId.length; i++) {
    elems.arrBtnsStart[i].disabled = true;
    const elementСar = <HTMLElement>elems.arrCars[i]?.lastElementChild;
    startCar(arrId[i], target, elementСar);
    elems.arrBtnsStop[i].disabled = true;
    elems.arrBtnsSelect[i].disabled = true;
    elems.arrBtnsRemove[i].disabled = true;
  }
};

btnRace.addEventListener('click', startRace);
