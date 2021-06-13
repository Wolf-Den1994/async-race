import { garageObj } from '../auxiliary-objs/garage';
import { winnersObj } from '../auxiliary-objs/winners';
import { reRendering } from '../handlers/re-rendering';
import { garage } from '../page-garage/garage';
import { winners } from '../page-winners/winners';
import { checkClass } from '../utils/check-class';
import { firstPage, limitCars, limitWinners } from '../utils/const';
import { ElemClasses } from '../utils/enums';
import { preparationWins } from '../win/rendering-winners';
import { btnToNext, btnToPrev } from './buttons';

const movePrevPage = function goPrevPage(): void {
  if (!checkClass(garage, ElemClasses.Hidden)) {
    if (garageObj.page !== firstPage) {
      garageObj.page--;
      reRendering();
    }
  }
  if (!checkClass(winners, ElemClasses.Hidden)) {
    if (winnersObj.page !== firstPage) {
      winnersObj.page--;
      winnersObj.numForIteratTable -= limitWinners;
      preparationWins(winnersObj.page);
    }
  }
};

const moveNextPage = function goNextPage(): void {
  if (!checkClass(garage, ElemClasses.Hidden)) {
    if (garageObj.page !== Math.ceil(garageObj.totalCount / limitCars)) {
      garageObj.page++;
      reRendering();
    }
  }
  if (!checkClass(winners, ElemClasses.Hidden)) {
    if (winnersObj.page !== Math.ceil(winnersObj.totalCount / limitWinners)) {
      winnersObj.page++;
      winnersObj.numForIteratTable += limitWinners;
      preparationWins(winnersObj.page);
    }
  }
};

btnToPrev.addEventListener('click', movePrevPage);
btnToNext.addEventListener('click', moveNextPage);
