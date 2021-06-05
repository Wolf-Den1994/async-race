import { footer } from './footer';

export const btnToPrev = document.createElement('button');
btnToPrev.innerHTML = 'prev';
btnToPrev.className = 'btn btn-prev';
footer.append(btnToPrev);

export const btnToNext = document.createElement('button');
btnToNext.innerHTML = 'next';
btnToNext.className = 'btn btn-next';
footer.append(btnToNext);
