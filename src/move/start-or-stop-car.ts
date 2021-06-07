import { drive, startOrStopCarEngine } from '../api/api';
import { IAnimation } from '../interfaces/animation';
import { objState } from '../state/general-state';

const animationCar = async function animatiomSomeCar(
  timeAnimetion: number,
  button: HTMLButtonElement,
  id: number,
) {
  const elementСar = button.parentElement?.nextElementSibling as HTMLDivElement;

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
): Promise<void> {
  const firstAnswer = await startOrStopCarEngine(id, 'started');
  const time = firstAnswer.data.distance / firstAnswer.data.velocity; // ms
  animationCar(time, button, id);

  objState.idAnimation.push(id);

  const secondAnswer = await drive(id, 'drive');
  if (!secondAnswer) {
    window.cancelAnimationFrame(objState.idAnimation[id]);
  }
};

export const stopCar = async function stopCarFromButton(
  id: number,
  button: HTMLButtonElement,
): Promise<void> {
  const elementСar = button.parentElement?.nextElementSibling as HTMLDivElement;
  await startOrStopCarEngine(id, 'stopped');
  window.cancelAnimationFrame(objState.idAnimation[id]);
  elementСar.style.transform = `translateX(${0}px)`;
};
