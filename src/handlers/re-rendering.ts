import { garageObj } from '../auxiliary-objs/garage';
import { carDiv } from '../page-garage/main';
import { gettingsCars } from './gets-all';

export const reRendering = function reRenderingPageGarage(): void {
  garageObj.carsCout = 0;
  garageObj.carColor = [];
  garageObj.carId = [];
  garageObj.idSelectCar = 0;
  carDiv.innerHTML = '';
  gettingsCars();
};
