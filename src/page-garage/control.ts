import { Tags } from '../utils/enums';
import { garage } from './garage';

export const controlSection = document.createElement(Tags.SECTION);
controlSection.className = 'garage-control';
garage.append(controlSection);
