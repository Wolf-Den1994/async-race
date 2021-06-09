import { createDiv, updateDiv } from './wrappers';

export const inputAddText = document.createElement('input');
inputAddText.className = 'input input-text input-add-text';
inputAddText.type = 'text';
createDiv.append(inputAddText);

export const inputAddColor = document.createElement('input');
inputAddColor.className = 'input input-color input-add-color';
inputAddColor.type = 'color';
inputAddColor.value = '#1df339';
createDiv.append(inputAddColor);

export const inputUpText = document.createElement('input');
inputUpText.className = 'input input-text input-up-text';
inputUpText.type = 'text';
updateDiv.append(inputUpText);

export const inputUpColor = document.createElement('input');
inputUpColor.className = 'input input-color input-up-color';
inputUpColor.type = 'color';
inputUpColor.value = '#3c9cc2';
updateDiv.append(inputUpColor);
