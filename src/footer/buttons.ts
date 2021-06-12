import { Tags } from '../utils/enums';
import { footer } from './footer';

export const btnToPrev = document.createElement(Tags.BUTTON);
btnToPrev.innerHTML = 'prev';
btnToPrev.className = 'btn btn-prev';
footer.append(btnToPrev);

export const btnToNext = document.createElement(Tags.BUTTON);
btnToNext.innerHTML = 'next';
btnToNext.className = 'btn btn-next';
footer.append(btnToNext);
