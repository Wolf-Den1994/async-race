import { reRendering } from '../handlers/re-rendering';
import { objState } from '../state/general-state';
import { btnToNext, btnToPrev } from './buttons';

const movePrevPage = function goPrevPage() {
  if (objState.page !== 1) {
    objState.page--;
    reRendering();
  }
};

const moveNextPage = function goNextPage() {
  if (objState.page !== 2) {
    objState.page++;
    reRendering();
  }
};

btnToPrev.addEventListener('click', movePrevPage);
btnToNext.addEventListener('click', moveNextPage);
