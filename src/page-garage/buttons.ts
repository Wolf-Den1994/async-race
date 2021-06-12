import { Tags } from '../utils/enums';
import { createDiv, operationDiv, updateDiv } from './wrappers';

export const btnCreateCar = document.createElement(Tags.BUTTON);
btnCreateCar.className = 'btn btn-create-car';
btnCreateCar.innerHTML = 'create';
btnCreateCar.disabled = true;
createDiv.append(btnCreateCar);

export const btnUpdateCar = document.createElement(Tags.BUTTON);
btnUpdateCar.className = 'btn btn-update-car';
btnUpdateCar.innerHTML = 'update';
btnUpdateCar.disabled = true;
updateDiv.append(btnUpdateCar);

export const btnRace = document.createElement(Tags.BUTTON);
btnRace.className = 'btn btn-race';
btnRace.innerHTML = 'race';
operationDiv.append(btnRace);

export const btnReset = document.createElement(Tags.BUTTON);
btnReset.className = 'btn btn-reset';
btnReset.innerHTML = 'reset';
btnReset.disabled = true;
operationDiv.append(btnReset);

export const btnGenerateCars = document.createElement(Tags.BUTTON);
btnGenerateCars.className = 'btn btn-generate-cars';
btnGenerateCars.innerHTML = 'generate cars';
operationDiv.append(btnGenerateCars);
