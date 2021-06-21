import { winnersObj } from '../auxiliary-objs/winners';
import { cellTime, cellWins } from '../page-winners/winners-table';
import { addClassList } from '../utils/add-class';
import { changeClassList } from '../utils/change-class';
import { checkClass } from '../utils/check-class';
import { limitWinners } from '../utils/const';
import { Arrow, Order, Sort, StateTable, TextUnsorted } from '../utils/enums';
import { removeClassList } from '../utils/remove-class';
import { OrderType, SortType } from '../utils/types';
import { preparationWins } from '../win/rendering-winners';

const sortWinners = function preparationPageWinnersBeforeRendering(
  page: number,
  limit: number,
  sort: SortType,
  order: OrderType,
  text: string,
  arrow: string,
) {
  preparationWins(page, limit, sort, order);
  winnersObj.order = order;
  cellWins.innerHTML = `${text} ${arrow}`;
};

const sortWins = function sortCarsByWinsNumber(): void {
  winnersObj.sort = Sort.WINS;
  if (
    !checkClass(cellWins, StateTable.Decrease) &&
    !checkClass(cellWins, StateTable.Increase)
  ) {
    sortWinners(
      winnersObj.page,
      limitWinners,
      Sort.WINS,
      Order.ASC,
      TextUnsorted.WINS,
      Arrow.Up,
    );
    addClassList(cellWins, StateTable.Decrease);
  } else if (checkClass(cellWins, StateTable.Decrease)) {
    sortWinners(
      winnersObj.page,
      limitWinners,
      Sort.WINS,
      Order.DESC,
      TextUnsorted.WINS,
      Arrow.Down,
    );
    changeClassList(cellWins, StateTable.Decrease, StateTable.Increase);
  } else if (checkClass(cellWins, StateTable.Increase)) {
    sortWinners(
      winnersObj.page,
      limitWinners,
      Sort.WINS,
      Order.ASC,
      TextUnsorted.WINS,
      Arrow.Up,
    );
    changeClassList(cellWins, StateTable.Increase, StateTable.Decrease);
  }
  cellTime.innerHTML = `${TextUnsorted.TIME}`;
  removeClassList(cellTime, StateTable.Decrease);
  removeClassList(cellTime, StateTable.Increase);
};

const sortTime = function sortCarsByBestTime(): void {
  winnersObj.sort = Sort.TIME;
  if (
    !checkClass(cellTime, StateTable.Decrease) &&
    !checkClass(cellTime, StateTable.Increase)
  ) {
    sortWinners(
      winnersObj.page,
      limitWinners,
      Sort.TIME,
      Order.ASC,
      TextUnsorted.TIME,
      Arrow.Up,
    );
    addClassList(cellTime, StateTable.Decrease);
  } else if (checkClass(cellTime, StateTable.Decrease)) {
    sortWinners(
      winnersObj.page,
      limitWinners,
      Sort.TIME,
      Order.DESC,
      TextUnsorted.TIME,
      Arrow.Down,
    );
    changeClassList(cellTime, StateTable.Decrease, StateTable.Increase);
  } else if (checkClass(cellTime, StateTable.Increase)) {
    sortWinners(
      winnersObj.page,
      limitWinners,
      Sort.TIME,
      Order.ASC,
      TextUnsorted.TIME,
      Arrow.Up,
    );
    changeClassList(cellTime, StateTable.Increase, StateTable.Decrease);
  }
  cellWins.innerHTML = `${TextUnsorted.WINS}`;
  removeClassList(cellWins, StateTable.Decrease);
  removeClassList(cellWins, StateTable.Increase);
};

cellTime.addEventListener('click', sortTime);
cellWins.addEventListener('click', sortWins);
