import { createDiv, operationDiv, updateDiv } from './wrappers';

const btnCreateCar = document.createElement('button');
btnCreateCar.className = 'btn btn-create-car';
btnCreateCar.innerHTML = 'create';
createDiv.append(btnCreateCar);

const btnUpdateCar = document.createElement('button');
btnUpdateCar.className = 'btn btn-update-car';
btnUpdateCar.innerHTML = 'update';
updateDiv.append(btnUpdateCar);

const btnRace = document.createElement('button');
btnRace.className = 'btn btn-race';
btnRace.innerHTML = 'race';
operationDiv.append(btnRace);

const btnReset = document.createElement('button');
btnReset.className = 'btn btn-reset';
btnReset.innerHTML = 'reset';
operationDiv.append(btnReset);

const btnGenerateCars = document.createElement('button');
btnGenerateCars.className = 'btn btn-generate-cars';
btnGenerateCars.innerHTML = 'generate cars';
operationDiv.append(btnGenerateCars);
