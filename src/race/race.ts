import { gettings } from '../api/api';
import { startCar } from '../move/start-or-stop-car';
import { btnRace } from '../page-garage/buttons';
import { objState } from '../state/general-state';

const startRace = async function startRaceOnCurrentPage(event: Event) {
  objState.isRace = true;
  objState.arrIdCar = [];
  const target = event.target as HTMLButtonElement;
  const answer = await gettings(objState.page);
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
    objState.arrIdCar.push(answer.data[i].id);
  }
  // console.log(arrId);
  for (let i = 0; i < arrId.length; i++) {
    arrBtnsStart[i].disabled = true;
    const elementСar = <HTMLElement>arrCars[i]?.lastElementChild;
    // console.log(objState.arrIdCar, objState.arrIdCar[i], elementСar);
    startCar(arrId[i], target, elementСar);
    arrBtnsStop[i].disabled = false;
  }
};

btnRace.addEventListener('click', startRace);
