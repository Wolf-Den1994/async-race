import { drive, startOrStopCarEngine } from '../api/api';
import { garageObj } from '../auxiliary-objs/garage';
import { raceObj } from '../auxiliary-objs/race';
import { IAnimation } from '../interfaces/animation';
import { btnRace, btnReset } from '../page-garage/buttons';
import { winnerDiv } from '../page-garage/winner';
import { win } from '../race/win';
import { addClassList } from '../utils/add-class';
import { checkClass } from '../utils/check-class';
import { ElemClasses, StatusCar } from '../utils/enums';

const endRange = 1;
const edgeOffsetPx = 100;
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
    button.disabled = true;
    const btnStop = button.nextElementSibling as HTMLButtonElement;
    const firstAnswer = await startOrStopCarEngine(id, StatusCar.Started);

    const time = firstAnswer.data.distance / firstAnswer.data.velocity;
    timeout = time;
    animationCar(time, id, car);

    raceObj.idAnimation.push(id);
    btnStop.disabled = false;

    const secondAnswer = await drive(id, StatusCar.Drive);
    if (!secondAnswer) {
      raceObj.numCarsRunning++;
      window.cancelAnimationFrame(raceObj.idAnimation[id]);
    }
  } else {
    button.disabled = true;
    const firstAnswer = await startOrStopCarEngine(id, StatusCar.Started);
    const time = firstAnswer.data.distance / firstAnswer.data.velocity;
    animationCar(time, id, car);

    raceObj.idAnimation.push(id);

    const secondAnswer = await drive(id, StatusCar.Drive);
    if (raceObj.countDriveForReset === garageObj.carsCout) {
      raceObj.countDriveForReset = 0;
      btnReset.disabled = false;
    }

    if (!secondAnswer) {
      raceObj.numCarsRunning++;
      window.cancelAnimationFrame(raceObj.idAnimation[id]);
    }
  }
};

export const stopCar = async function stopCarFromButton(
  id: number,
  button: HTMLButtonElement,
  car: HTMLElement,
): Promise<void> {
  addClassList(winnerDiv, ElemClasses.Hidden);
  if (checkClass(button, 'btn-stop')) {
    button.disabled = true;
    const btnStart = button.previousElementSibling as HTMLButtonElement;
    window.cancelAnimationFrame(raceObj.idAnimation[id]);
    car.style.transform = `translateX(${0}px)`;
    await startOrStopCarEngine(id, StatusCar.Stopped);
    raceObj.numCarsRunning++;
    setTimeout(() => {
      btnStart.disabled = false;
    }, timeout);
  } else {
    button.disabled = true;
    window.cancelAnimationFrame(raceObj.idAnimation[id]);
    car.style.transform = `translateX(${0}px)`;
    await startOrStopCarEngine(id, StatusCar.Stopped);
    raceObj.numCarsRunning++;
    if (raceObj.countStoppedForRace === garageObj.carsCout) {
      const btnsStrt: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
        '.btn-start',
      );
      const arrBtnsStart: HTMLButtonElement[] = Array.prototype.slice.call(
        btnsStrt,
      );
      raceObj.countStoppedForRace = 0;
      btnRace.disabled = false;
      for (let i = 0; i < garageObj.carsCout; i++) {
        arrBtnsStart[i].disabled = false;
      }
    }
  }
};
