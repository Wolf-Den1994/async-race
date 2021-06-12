import { garage } from '../page-garage/garage';
import { winners } from '../page-winners/winners';
import { cellTime, cellWins } from '../page-winners/winners-table';
import { objState } from '../state/general-state';
import { checkClass } from '../utils/check-class';
import { ElemClasses } from '../utils/enums';
import { updateClassList } from '../utils/update-class';
import { preparationWins } from '../win/rendering-winners';
import { btnToGarage, btnToWinners } from './buttons';

const showPageWinners = function showPageWinnersNow() {
  if (checkClass(winners, ElemClasses.Hidden)) {
    updateClassList(garage, winners, ElemClasses.Hidden);
    preparationWins(objState.pageWinners);
    cellWins.innerHTML = 'Wins';
    cellTime.innerHTML = 'Best Time (seconds)';
  }
};

const showPageGarage = function showPageGarageNow() {
  if (checkClass(garage, ElemClasses.Hidden)) {
    updateClassList(winners, garage, ElemClasses.Hidden);
  }
};

btnToWinners.addEventListener('click', showPageWinners);
btnToGarage.addEventListener('click', showPageGarage);
