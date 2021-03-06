import { drive, startOrStopCarEngine } from '../api/api';
import { garageObj } from '../auxiliary-objs/garage';
import { raceObj } from '../auxiliary-objs/race';
import { IAnimation } from '../interfaces/animation';
import { btnGenerateCars, btnRace, btnReset } from '../page-garage/buttons';
import { winnerDiv } from '../page-garage/winner';
import { win } from '../race/win';
import { addClassList } from '../utils/add-class';
import { checkClass } from '../utils/check-class';
import { ElemClasses, StatusCar } from '../utils/enums';
import { getBtns, getElems } from '../utils/get-elems';

const endRange = 1;
const edgeOffsetPx = 100;
const TIME_CALL_FN_CHECK = 333;
let timeout = 0;

const animationCar = async function animatiomSomeCar(
  timeAnimetion: number,
  id: number,
  elementСar: HTMLElement,
): Promise<void> {
  const animateCar = async function animateMovingCar({
    duration,
    draw,
    timing,
  }: IAnimation) {
    const startTime: number = performance.now();

    raceObj.idAnimation[id] = window.requestAnimationFrame(
      async function animate(time) {
        let timeFraction = (time - startTime) / duration;
        if (timeFraction > endRange) timeFraction = endRange;

        const progress = timing(timeFraction);

        draw(progress * (window.innerWidth - edgeOffsetPx));

        if (timeFraction < endRange) {
          raceObj.idAnimation[id] = window.requestAnimationFrame(animate);
        } else if (raceObj.isRace) {
          win(id, timeAnimetion);
        }
      },
    );
  };

  function realizetionAnimation(): void {
    const objAnimation: IAnimation = {
      duration: timeAnimetion,
      draw: function draw(progress: number) {
        elementСar.style.transform = `translateX(${progress}px)`;
      },
      timing: function timing(timeFraction: number) {
        return timeFraction;
      },
    };
    animateCar(objAnimation);
  }
  realizetionAnimation();
};

export const startCar = async function startCarFromButton(
  id: number,
  button: HTMLButtonElement,
  car: HTMLElement,
): Promise<void> {
  raceObj.isWin = 0;
  raceObj.numCarsRunning = 0;
  if (checkClass(button, 'btn-start')) {
    btnRace.disabled = true;
    button.disabled = true;
    const btnStop = button.nextElementSibling as HTMLButtonElement;
    const btns = getBtns(button);
    btns.btnSelect.disabled = true;
    btns.btnRemove.disabled = true;
    const firstInfo = await startOrStopCarEngine(id, StatusCar.Started);

    const time = firstInfo.data.distance / firstInfo.data.velocity;
    timeout = time;
    animationCar(time, id, car);

    raceObj.idAnimation.push(id);
    btnStop.disabled = false;

    const statusDrive = await drive(id, StatusCar.Drive);
    if (!statusDrive) {
      raceObj.numCarsRunning++;
      window.cancelAnimationFrame(raceObj.idAnimation[id]);
    }
  } else {
    button.disabled = true;
    btnGenerateCars.disabled = true;
    const firstInfo = await startOrStopCarEngine(id, StatusCar.Started);
    const time = firstInfo.data.distance / firstInfo.data.velocity;
    animationCar(time, id, car);

    raceObj.idAnimation.push(id);

    const statusDrive = await drive(id, StatusCar.Drive);
    if (raceObj.countDriveForReset === garageObj.carsCount) {
      raceObj.countDriveForReset = 0;
      btnReset.disabled = false;
    }

    if (!statusDrive) {
      raceObj.numCarsRunning++;
      window.cancelAnimationFrame(raceObj.idAnimation[id]);
    }
  }
};

const checkStartBtns = function checkActiveStartBtns() {
  const htmlElems = getElems();
  let count = 0;
  for (let i = 0; i < htmlElems.arrBtnsStart.length; i++) {
    if (!htmlElems.arrBtnsStart[i].disabled) {
      count++;
    }
  }
  if (count === htmlElems.arrBtnsStart.length) {
    count = 0;
    btnRace.disabled = false;
  }
  setTimeout(checkStartBtns, TIME_CALL_FN_CHECK);
};

export const stopCar = async function stopCarFromButton(
  id: number,
  button: HTMLButtonElement,
  car: HTMLElement,
): Promise<void> {
  addClassList(winnerDiv, ElemClasses.Hidden);
  const htmlElems = getElems();
  if (checkClass(button, 'btn-stop')) {
    button.disabled = true;
    const btnStart = button.previousElementSibling as HTMLButtonElement;
    const btns = getBtns(button);
    window.cancelAnimationFrame(raceObj.idAnimation[id]);
    car.style.transform = `translateX(${0}px)`;
    await startOrStopCarEngine(id, StatusCar.Stopped);
    raceObj.numCarsRunning++;
    setTimeout(() => {
      btnStart.disabled = false;
      btns.btnSelect.disabled = false;
      btns.btnRemove.disabled = false;
    }, timeout);
    checkStartBtns();
  } else {
    button.disabled = true;
    window.cancelAnimationFrame(raceObj.idAnimation[id]);
    car.style.transform = `translateX(${0}px)`;
    await startOrStopCarEngine(id, StatusCar.Stopped);
    raceObj.numCarsRunning++;
    if (raceObj.countStoppedForRace === garageObj.carsCount) {
      raceObj.countStoppedForRace = 0;
      btnRace.disabled = false;
      btnGenerateCars.disabled = false;
      for (let i = 0; i < garageObj.carsCount; i++) {
        htmlElems.arrBtnsStart[i].disabled = false;
        htmlElems.arrBtnsSelect[i].disabled = false;
        htmlElems.arrBtnsRemove[i].disabled = false;
      }
    }
  }
};
