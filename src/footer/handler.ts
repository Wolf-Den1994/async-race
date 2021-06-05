import { reRendering } from '../handlers/re-rendering';
import { objGeneralState } from '../state/general-state';
import { btnToNext, btnToPrev } from './buttons';

const movePrevPage = function goPrevPage() {
  if (objGeneralState.page !== 1) {
    objGeneralState.page--;
    reRendering();
  }
};

const moveNextPage = function goNextPage() {
  if (objGeneralState.page !== 2) {
    objGeneralState.page++;
    reRendering();
  }
};

btnToPrev.addEventListener('click', movePrevPage);
btnToNext.addEventListener('click', moveNextPage);
