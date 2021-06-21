import { winnersObj } from '../auxiliary-objs/winners';
import { garage } from '../page-garage/garage';
import { winners } from '../page-winners/winners';
import { cellTime, cellWins } from '../page-winners/winners-table';
import { checkClass } from '../utils/check-class';
import { limitWinners } from '../utils/const';
import { Arrow, ElemClasses, StateTable, TextUnsorted } from '../utils/enums';
import { updateClassList } from '../utils/update-class';
import { preparationWins } from '../win/rendering-winners';
import { btnToGarage, btnToWinners } from './buttons';

const isUnsoort = function isUnsoortedByDecreaseAndDecrease() {
  if (
    !checkClass(cellTime, StateTable.Decrease) &&
    !checkClass(cellTime, StateTable.Increase) &&
    !checkClass(cellWins, StateTable.Decrease) &&
    !checkClass(cellWins, StateTable.Increase)
  ) {
    return true;
  }
  return false;
};

const showPageWinners = function showPageWinnersNow(): void {
  if (checkClass(winners, ElemClasses.Hidden)) {
    updateClassList(garage, winners, ElemClasses.Hidden);
    preparationWins(
      winnersObj.page,
      limitWinners,
      winnersObj.sort,
      winnersObj.order,
    );
    if (isUnsoort()) {
      cellWins.innerHTML = TextUnsorted.WINS;
      cellTime.innerHTML = TextUnsorted.TIME;
    } else if (checkClass(cellWins, StateTable.Decrease)) {
      cellWins.innerHTML = `${TextUnsorted.WINS} ${Arrow.Up}`;
    } else if (checkClass(cellWins, StateTable.Increase)) {
      cellWins.innerHTML = `${TextUnsorted.WINS} ${Arrow.Down}`;
    } else if (checkClass(cellTime, StateTable.Decrease)) {
      cellTime.innerHTML = `${TextUnsorted.TIME} ${Arrow.Up}`;
    } else if (checkClass(cellTime, StateTable.Increase)) {
      cellTime.innerHTML = `${TextUnsorted.TIME} ${Arrow.Down}`;
    }
  }
};

const showPageGarage = function showPageGarageNow(): void {
  if (checkClass(garage, ElemClasses.Hidden)) {
    updateClassList(winners, garage, ElemClasses.Hidden);
  }
};

btnToWinners.addEventListener('click', showPageWinners);
btnToGarage.addEventListener('click', showPageGarage);
