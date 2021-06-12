import { drive, startOrStopCarEngine } from '../api/api';
import { IAnimation } from '../interfaces/animation';
import { btnRace, btnReset } from '../page-garage/buttons';
import { winnerDiv } from '../page-garage/winner';
import { win } from '../race/win';
import { objState } from '../state/general-state';
import { addClassList } from '../utils/add-class';
import { checkClass } from '../utils/check-class';

let timeout = 0;
// let arrTimeout: number[] = [];
// let maxTimeout = 0;

const animationCar = async function animatiomSomeCar(
  timeAnimetion: number,
  id: number,
  elementСar: HTMLElement,
) {
  const animateCar = async function animateMovingCar({
    duration,
    draw,
    timing,
  }: IAnimation) {
    const startTime: number = performance.now();

    objState.idAnimation[id] = window.requestAnimationFrame(
      async function animate(time) {
        let timeFraction = (time - startTime) / duration;
        if (timeFraction > 1) timeFraction = 1;

        const progress = timing(timeFraction);

        draw(progress * (window.innerWidth - 100));

        if (timeFraction < 1) {
          objState.idAnimation[id] = window.requestAnimationFrame(animate);
        } else if (objState.isRace) {
          win(id, timeAnimetion);
        }
      },
    );
  };

  function realizetionAnimation() {
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
  objState.isWin = 0;
  objState.numCarsRunning = 0;
  if (checkClass(button, 'btn-start')) {
    button.disabled = true;
    const btnStop = button.nextElementSibling as HTMLButtonElement;
    const firstAnswer = await startOrStopCarEngine(id, 'started');

    const time = firstAnswer.data.distance / firstAnswer.data.velocity; // ms
    timeout = time;
    animationCar(time, id, car);

    objState.idAnimation.push(id);
    btnStop.disabled = false;

    const secondAnswer = await drive(id, 'drive');
    if (!secondAnswer) {
      objState.numCarsRunning++;
      window.cancelAnimationFrame(objState.idAnimation[id]);
    }
  } else {
    button.disabled = true;
    const firstAnswer = await startOrStopCarEngine(id, 'started');
    const time = firstAnswer.data.distance / firstAnswer.data.velocity; // ms
    // arrTimeout.push(time)
    // console.log(arrTimeout)
    // maxTimeout = Math.max(...arrTimeout);
    animationCar(time, id, car);

    objState.idAnimation.push(id);

    const secondAnswer = await drive(id, 'drive');
    if (objState.countDriveForReset === objState.carsCout) {
      objState.countDriveForReset = 0;
      btnReset.disabled = false;
    }

    if (!secondAnswer) {
      objState.numCarsRunning++;
      window.cancelAnimationFrame(objState.idAnimation[id]);
    }
  }
};
// разблокировать кнопку старт после прихода ответа стоп
export const stopCar = async function stopCarFromButton(
  id: number,
  button: HTMLButtonElement,
  car: HTMLElement,
): Promise<void> {
  addClassList(winnerDiv, 'hidden');
  if (checkClass(button, 'btn-stop')) {
    button.disabled = true;
    const btnStart = button.previousElementSibling as HTMLButtonElement;
    window.cancelAnimationFrame(objState.idAnimation[id]);
    car.style.transform = `translateX(${0}px)`;
    await startOrStopCarEngine(id, 'stopped');
    objState.numCarsRunning++;
    setTimeout(() => {
      btnStart.disabled = false;
    }, timeout);
  } else {
    // console.log(maxTimeout)
    button.disabled = true;
    window.cancelAnimationFrame(objState.idAnimation[id]);
    car.style.transform = `translateX(${0}px)`;
    await startOrStopCarEngine(id, 'stopped');
    objState.numCarsRunning++;
    // console.log(maxTimeout)
    // setTimeout(() => {
    // console.log(objState.countDriveForRace)
    if (objState.countDriveForRace === objState.carsCout) {
      const btnsStart: NodeListOf<HTMLButtonElement> = 
        document.querySelectorAll(
          '.btn-start',
        );
      const arrBtnsStart: HTMLButtonElement[] = Array.prototype.slice.call(
        btnsStart,
      );
      objState.countDriveForRace = 0;
      btnRace.disabled = false;
      for (let i = 0; i < objState.carsCout; i++) {
        arrBtnsStart[i].disabled = false;
      }
    }
    // arrTimeout = [];
    // }, maxTimeout);
  }
};
