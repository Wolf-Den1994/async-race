import { Tags } from '../utils/enums';
import { header } from './header';

export const btnToGarage = document.createElement(Tags.BUTTON);
btnToGarage.innerHTML = 'to garage';
btnToGarage.className = 'btn btn-to-garage';
header.append(btnToGarage);

export const btnToWinners = document.createElement(Tags.BUTTON);
btnToWinners.innerHTML = 'to winners';
btnToWinners.className = 'btn btn-to-winners';
header.append(btnToWinners);
