import { gettings } from '../api/api';
import { garageObj } from '../auxiliary-objs/garage';
import { raceObj } from '../auxiliary-objs/race';
import { startCar } from '../move/start-or-stop-car';
import { btnRace } from '../page-garage/buttons';

const startRace = async function startRaceOnCurrentPage(
  event: Event,
): Promise<void> {
  raceObj.isRace = true;
  raceObj.arrIdCar = [];
  const target = event.target as HTMLButtonElement;
  const answer = await gettings(garageObj.page);
  const arrId: number[] = [];
  const cars: NodeListOf<Element> = document.querySelectorAll('.car');
  const btnsStart: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
    '.btn-start',
  );
  const btnsStop: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
    '.btn-stop',
  );
  const arrCars: HTMLElement[] = Array.prototype.slice.call(cars);
  const arrBtnsStart: HTMLButtonElement[] = Array.prototype.slice.call(
    btnsStart,
  );
  const arrBtnsStop: HTMLButtonElement[] = Array.prototype.slice.call(btnsStop);
  for (let i = 0; i < answer.data.length; i++) {
    arrId.push(answer.data[i].id);
    raceObj.arrIdCar.push(answer.data[i].id);
  }
  for (let i = 0; i < arrId.length; i++) {
    arrBtnsStart[i].disabled = true;
    const elementСar = <HTMLElement>arrCars[i]?.lastElementChild;
    startCar(arrId[i], target, elementСar);
    arrBtnsStop[i].disabled = true;
  }
};

btnRace.addEventListener('click', startRace);
