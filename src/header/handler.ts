import { footer } from '../footer/footer';
import { garage } from '../page-garage/garage';
import { winners } from '../page-winners/winners';
import { addClassList } from '../utils/add-class';
import { checkClass } from '../utils/check-class';
import { ElemClasses } from '../utils/enums';
import { removeClassList } from '../utils/remove-class';
import { updateClassList } from '../utils/update-class';
import { btnToGarage, btnToWinners } from './buttons';

const showPageWinners = function showPageWinnersNow() {
  if (checkClass(winners, ElemClasses.Hidden)) {
    updateClassList(garage, winners, ElemClasses.Hidden);
    addClassList(footer, 'hidden');
  }
};

const showPageGarage = function showPageGarageNow() {
  if (checkClass(garage, ElemClasses.Hidden)) {
    updateClassList(winners, garage, ElemClasses.Hidden);
    removeClassList(footer, 'hidden');
  }
};

btnToWinners.addEventListener('click', showPageWinners);
btnToGarage.addEventListener('click', showPageGarage);
