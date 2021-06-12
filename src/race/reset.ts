import { gettings } from '../api/api';
import { stopCar } from '../move/start-or-stop-car';
import { btnReset } from '../page-garage/buttons';
import { objState } from '../state/general-state';

const resetRace = async function resetRaceOnCurrentPage(
  event: Event,
): Promise<void> {
  const target = event.target as HTMLButtonElement;
  const arrId: number[] = [];
  const answer = await gettings(objState.page);
  const cars: NodeListOf<Element> = document.querySelectorAll('.car');
  const btnsStop: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
    '.btn-stop',
  );
  const arrCars: HTMLElement[] = Array.prototype.slice.call(cars);
  const arrBtnsStop: HTMLButtonElement[] = Array.prototype.slice.call(btnsStop);

  for (let i = 0; i < answer.data.length; i++) {
    arrId.push(answer.data[i].id);
  }

  for (let i = 0; i < arrId.length; i++) {
    arrBtnsStop[i].disabled = true;
    const elementСar = <HTMLElement>arrCars[i]?.lastElementChild;
    stopCar(arrId[i], target, elementСar);
  }
};

btnReset.addEventListener('click', resetRace);
