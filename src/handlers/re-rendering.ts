import { carDiv } from '../page-garage/main';
import { objGeneralState } from '../state/general-state';
import { gettingsCars } from './gets-all';

export const reRendering = function reRenderingPageGarage(): void {
  objGeneralState.carsCout = 0;
  objGeneralState.carsCountColor = 0;
  objGeneralState.carColor = [];
  carDiv.innerHTML = '';
  gettingsCars();
};
