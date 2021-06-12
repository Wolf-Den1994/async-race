import { Tags } from '../utils/enums';
import { garage } from './garage';

export const winnerDiv = document.createElement(Tags.DIV);
winnerDiv.className = 'winner-race hidden';
garage.append(winnerDiv);
