import { carDiv } from '../page-garage/main';
import { objState } from '../state/general-state';
import { gettingsCars } from './gets-all';

export const reRendering = function reRenderingPageGarage(): void {
  objState.carsCout = 0;
  objState.carsCountColor = 0;
  objState.carColor = [];
  objState.carId = [];
  objState.idSelectCar = 0;
  carDiv.innerHTML = '';
  gettingsCars();
};
