import { reRendering } from '../handlers/re-rendering';
import { garage } from '../page-garage/garage';
import { winners } from '../page-winners/winners';
import { objState } from '../state/general-state';
import { checkClass } from '../utils/check-class';
import { preparationWins } from '../win/rendering-winners';
import { btnToNext, btnToPrev } from './buttons';

const movePrevPage = function goPrevPage() {
  if (!checkClass(garage, 'hidden')) {
    if (objState.page !== 1) {
      objState.page--;
      reRendering();
    }
  }
  if (!checkClass(winners, 'hidden')) {
    if (objState.pageWinners !== 1) {
      objState.pageWinners--;
      objState.numForIteratTable -= 10;
      preparationWins(objState.pageWinners);
    }
  }
};

const moveNextPage = function goNextPage() {
  if (!checkClass(garage, 'hidden')) {
    if (objState.page !== Math.ceil(objState.totalCount / 7)) {
      objState.page++;
      reRendering();
    }
  }
  if (!checkClass(winners, 'hidden')) {
    if (objState.pageWinners !== Math.ceil(objState.totalCountWinners / 10)) {
      objState.pageWinners++;
      objState.numForIteratTable += 10;
      preparationWins(objState.pageWinners);
    }
  }
};

btnToPrev.addEventListener('click', movePrevPage);
btnToNext.addEventListener('click', moveNextPage);
