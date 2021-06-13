import { garageObj } from '../auxiliary-objs/garage';
import { carDiv } from '../page-garage/main';
import { gettingsCars } from './gets-all';

export const reRendering = function reRenderingPageGarage(): void {
  garageObj.carsCount = 0;
  garageObj.carColor = [];
  garageObj.carId = [];
  carDiv.innerHTML = '';
  gettingsCars();
};
