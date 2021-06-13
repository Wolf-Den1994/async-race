import { winnersObj } from '../auxiliary-objs/winners';
import { cellTime, cellWins } from '../page-winners/winners-table';
import { addClassList } from '../utils/add-class';
import { changeClassList } from '../utils/change-class';
import { checkClass } from '../utils/check-class';
import { limitWinners } from '../utils/const';
import { Arrow, Order, Sort, StateTable, TextUnsorted } from '../utils/enums';
import { preparationWins } from '../win/rendering-winners';

const sortWins = function sortCarsByWinsNumber(): void {
  if (
    !checkClass(cellWins, StateTable.Decrease) &&
    !checkClass(cellWins, StateTable.Increase)
  ) {
    preparationWins(winnersObj.page, limitWinners, Sort.WINS, Order.ASC);
    addClassList(cellWins, StateTable.Decrease);
    cellWins.innerHTML = `${TextUnsorted.WINS} ${Arrow.Up}`;
  } else if (checkClass(cellWins, StateTable.Decrease)) {
    preparationWins(winnersObj.page, limitWinners, Sort.WINS, Order.DESC);
    changeClassList(cellWins, StateTable.Decrease, StateTable.Increase);
    cellWins.innerHTML = `${TextUnsorted.WINS} ${Arrow.Down}`;
  } else if (checkClass(cellWins, StateTable.Increase)) {
    preparationWins(winnersObj.page, limitWinners, Sort.WINS, Order.ASC);
    changeClassList(cellWins, StateTable.Increase, StateTable.Decrease);
    cellWins.innerHTML = `${TextUnsorted.WINS} ${Arrow.Up}`;
  }
  cellTime.innerHTML = `${TextUnsorted.TIME}`;
};

const sortTime = function sortCarsByBestTime(): void {
  if (
    !checkClass(cellTime, StateTable.Decrease) &&
    !checkClass(cellTime, StateTable.Increase)
  ) {
    preparationWins(winnersObj.page, limitWinners, Sort.TIME, Order.ASC);
    addClassList(cellTime, StateTable.Decrease);
    cellTime.innerHTML = `${TextUnsorted.TIME} ${Arrow.Up}`;
  } else if (checkClass(cellTime, StateTable.Decrease)) {
    preparationWins(winnersObj.page, limitWinners, Sort.TIME, Order.DESC);
    changeClassList(cellTime, StateTable.Decrease, StateTable.Increase);
    cellTime.innerHTML = `${TextUnsorted.TIME} ${Arrow.Down}`;
  } else if (checkClass(cellTime, StateTable.Increase)) {
    preparationWins(winnersObj.page, limitWinners, Sort.TIME, Order.ASC);
    changeClassList(cellTime, StateTable.Increase, StateTable.Decrease);
    cellTime.innerHTML = `${TextUnsorted.TIME} ${Arrow.Up}`;
  }
  cellWins.innerHTML = `${TextUnsorted.WINS}`;
};

cellTime.addEventListener('click', sortTime);
cellWins.addEventListener('click', sortWins);
