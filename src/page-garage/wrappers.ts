import { controlSection } from './control';

export const createDiv = document.createElement('div');
createDiv.className = 'create';
controlSection.append(createDiv);

export const updateDiv = document.createElement('div');
updateDiv.className = 'update';
controlSection.append(updateDiv);

export const operationDiv = document.createElement('div');
operationDiv.className = 'operation';
controlSection.append(operationDiv);
