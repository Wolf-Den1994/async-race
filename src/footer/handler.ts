import { reRendering } from '../handlers/re-rendering';
import { garage } from '../page-garage/garage';
import { winners } from '../page-winners/winners';
import { objState } from '../state/general-state';
import { checkClass } from '../utils/check-class';
import { firstPage, limitCars, limitWinners } from '../utils/const';
import { ElemClasses } from '../utils/enums';
import { preparationWins } from '../win/rendering-winners';
import { btnToNext, btnToPrev } from './buttons';

const movePrevPage = function goPrevPage(): void {
  if (!checkClass(garage, ElemClasses.Hidden)) {
    if (objState.page !== firstPage) {
      objState.page--;
      reRendering();
    }
  }
  if (!checkClass(winners, ElemClasses.Hidden)) {
    if (objState.pageWinners !== firstPage) {
      objState.pageWinners--;
      objState.numForIteratTable -= limitWinners;
      preparationWins(objState.pageWinners);
    }
  }
};

const moveNextPage = function goNextPage(): void {
  if (!checkClass(garage, ElemClasses.Hidden)) {
    if (objState.page !== Math.ceil(objState.totalCount / limitCars)) {
      objState.page++;
      reRendering();
    }
  }
  if (!checkClass(winners, ElemClasses.Hidden)) {
    if (
      objState.pageWinners !==
      Math.ceil(objState.totalCountWinners / limitWinners)
    ) {
      objState.pageWinners++;
      objState.numForIteratTable += limitWinners;
      preparationWins(objState.pageWinners);
    }
  }
};

btnToPrev.addEventListener('click', movePrevPage);
btnToNext.addEventListener('click', moveNextPage);
