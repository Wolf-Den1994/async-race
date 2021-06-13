import { winnersObj } from '../auxiliary-objs/winners';
import { garage } from '../page-garage/garage';
import { winners } from '../page-winners/winners';
import { cellTime, cellWins } from '../page-winners/winners-table';
import { checkClass } from '../utils/check-class';
import { ElemClasses, TextUnsorted } from '../utils/enums';
import { updateClassList } from '../utils/update-class';
import { preparationWins } from '../win/rendering-winners';
import { btnToGarage, btnToWinners } from './buttons';

const showPageWinners = function showPageWinnersNow(): void {
  if (checkClass(winners, ElemClasses.Hidden)) {
    updateClassList(garage, winners, ElemClasses.Hidden);
    preparationWins(winnersObj.page);
    cellWins.innerHTML = TextUnsorted.WINS;
    cellTime.innerHTML = TextUnsorted.TIME;
  }
};

const showPageGarage = function showPageGarageNow(): void {
  if (checkClass(garage, ElemClasses.Hidden)) {
    updateClassList(winners, garage, ElemClasses.Hidden);
  }
};

btnToWinners.addEventListener('click', showPageWinners);
btnToGarage.addEventListener('click', showPageGarage);
