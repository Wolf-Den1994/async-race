import { Tags } from '../utils/enums';
import { controlSection } from './control';

export const createDiv = document.createElement(Tags.DIV);
createDiv.className = 'create';
controlSection.append(createDiv);

export const updateDiv = document.createElement(Tags.DIV);
updateDiv.className = 'update';
controlSection.append(updateDiv);

export const operationDiv = document.createElement(Tags.DIV);
operationDiv.className = 'operation';
controlSection.append(operationDiv);
