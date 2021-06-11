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
    // console.log(objState.pageWinners)
    if (objState.pageWinners !== 1) {
      // console.log('minus')
      objState.pageWinners--;
      objState.numForIteratTable -= 10;
      preparationWins();
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
    // console.log(objState.pageWinners, Math.ceil(objState.pageWinners / 10))
    if (objState.pageWinners !== Math.ceil(objState.totalCountWinners / 10)) {
      // console.log('plus')
      objState.pageWinners++;
      objState.numForIteratTable += 10;
      // console.log('objState.pageWinners', objState.pageWinners)
      preparationWins()
    }
  }
};

btnToPrev.addEventListener('click', movePrevPage);
btnToNext.addEventListener('click', moveNextPage);
