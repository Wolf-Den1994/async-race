import { startOrStopCarEngine } from '../api/api';
import { IAnimation } from '../interfaces/animation';

const animationCar = function animatiomSomeCar(
  timeAnimetion: number,
  button: HTMLButtonElement,
) {
  const elementСar = button.parentElement?.nextElementSibling as HTMLDivElement;

  const animateCar = function animateMovingCar({
    duration,
    draw,
    timing,
  }: IAnimation) {
    const startTime: number = performance.now();

    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - startTime) / duration;
      if (timeFraction > 1) timeFraction = 1;

      const progress = timing(timeFraction);

      draw(progress * (window.innerWidth - 100));

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
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
  const answer = await startOrStopCarEngine(id, 'started');
  const time = answer.data.distance / answer.data.velocity; // ms
  animationCar(time, button);
};
