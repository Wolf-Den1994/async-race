import { createDiv, operationDiv, updateDiv } from './wrappers';

export const btnCreateCar = document.createElement('button');
btnCreateCar.className = 'btn btn-create-car';
btnCreateCar.innerHTML = 'create';
btnCreateCar.disabled = true;
createDiv.append(btnCreateCar);

export const btnUpdateCar = document.createElement('button');
btnUpdateCar.className = 'btn btn-update-car';
btnUpdateCar.innerHTML = 'update';
btnUpdateCar.disabled = true;
updateDiv.append(btnUpdateCar);

export const btnRace = document.createElement('button');
btnRace.className = 'btn btn-race';
btnRace.innerHTML = 'race';
operationDiv.append(btnRace);

export const btnReset = document.createElement('button');
btnReset.className = 'btn btn-reset';
btnReset.innerHTML = 'reset';
operationDiv.append(btnReset);

export const btnGenerateCars = document.createElement('button');
btnGenerateCars.className = 'btn btn-generate-cars';
btnGenerateCars.innerHTML = 'generate cars';
operationDiv.append(btnGenerateCars);
