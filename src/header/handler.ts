import { garage } from '../page-garage/garage';
import { winners } from '../page-winners/winners';
import { checkClass } from '../utils/check-class';
import { ElemClasses } from '../utils/enums';
import { updateClassList } from '../utils/update-class';
import { btnToGarage, btnToWinners } from './buttons';

const showPageWinners = function showPageWinnersNow() {
  if (checkClass(winners, ElemClasses.Hidden)) {
    updateClassList(garage, winners, ElemClasses.Hidden);
  }
};

const showPageGarage = function showPageGarageNow() {
  if (checkClass(garage, ElemClasses.Hidden)) {
    updateClassList(winners, garage, ElemClasses.Hidden);
  }
};

btnToWinners.addEventListener('click', showPageWinners);
btnToGarage.addEventListener('click', showPageGarage);
