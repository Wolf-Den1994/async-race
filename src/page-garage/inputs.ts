import { ElemClasses, InputType, Tags } from '../utils/enums';
import { createDiv, updateDiv } from './wrappers';

export const inputAddText = document.createElement(Tags.INPUT);
inputAddText.className = `
  ${ElemClasses.Input} 
  ${ElemClasses.InputText} 
  input-add-text
`;
inputAddText.type = `${InputType.TEXT}`;
createDiv.append(inputAddText);

export const inputAddColor = document.createElement(Tags.INPUT);
inputAddColor.className = `
  ${ElemClasses.Input} 
  ${ElemClasses.InputColor} 
  input-add-color
`;
inputAddColor.type = `${InputType.COLOR}`;
inputAddColor.value = '#1df339';
createDiv.append(inputAddColor);

export const inputUpText = document.createElement(Tags.INPUT);
inputUpText.className = `
  ${ElemClasses.Input} 
  ${ElemClasses.InputText} 
  input-up-text
`;
inputUpText.type = `${InputType.TEXT}`;
updateDiv.append(inputUpText);

export const inputUpColor = document.createElement(Tags.INPUT);
inputUpColor.className = `
  ${ElemClasses.Input} 
  ${ElemClasses.InputColor} 
  input-up-color
`;
inputUpColor.type = `${InputType.COLOR}`;
inputUpColor.value = '#3c9cc2';
updateDiv.append(inputUpColor);
