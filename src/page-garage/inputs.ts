import { createDiv, updateDiv } from './wrappers';

export const inputAddText = document.createElement('input');
inputAddText.className = 'input-add-text';
inputAddText.type = 'text';
createDiv.append(inputAddText);

export const inputAddColor = document.createElement('input');
inputAddColor.className = 'input-add-color';
inputAddColor.type = 'color';
createDiv.append(inputAddColor);

export const inputUpText = document.createElement('input');
inputUpText.className = 'input-up-text';
inputUpText.type = 'text';
updateDiv.append(inputUpText);

export const inputUpColor = document.createElement('input');
inputUpColor.className = 'input-up-color';
inputUpColor.type = 'color';
updateDiv.append(inputUpColor);
