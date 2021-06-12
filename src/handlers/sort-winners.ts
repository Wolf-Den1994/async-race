import { cellTime, cellWins } from '../page-winners/winners-table';
import { objState } from '../state/general-state';
import { addClassList } from '../utils/add-class';
import { changeClassList } from '../utils/change-class';
import { checkClass } from '../utils/check-class';
import { preparationWins } from '../win/rendering-winners';

const sortWins = function sortCarsByWinsNumber() {
  if (!checkClass(cellWins, 'decrease') && !checkClass(cellWins, 'increase')) {
    preparationWins(objState.pageWinners, 10, 'wins', 'ASC');
    addClassList(cellWins, 'decrease');
    cellWins.innerHTML = 'Wins &#8593';
  } else if (checkClass(cellWins, 'decrease')) {
    preparationWins(objState.pageWinners, 10, 'wins', 'DESC');
    changeClassList(cellWins, 'decrease', 'increase');
    cellWins.innerHTML = 'Wins &#8595';
  } else if (checkClass(cellWins, 'increase')) {
    preparationWins(objState.pageWinners, 10, 'wins', 'ASC');
    changeClassList(cellWins, 'increase', 'decrease');
    cellWins.innerHTML = 'Wins &#8593';
  }
  cellTime.innerHTML = 'Best Time (seconds)';
};

const sortTime = function sortCarsByBestTime() {
  if (!checkClass(cellTime, 'decrease') && !checkClass(cellTime, 'increase')) {
    preparationWins(objState.pageWinners, 10, 'time', 'ASC');
    addClassList(cellTime, 'decrease');
    cellTime.innerHTML = 'Best Time (seconds) &#8593';
  } else if (checkClass(cellTime, 'decrease')) {
    preparationWins(objState.pageWinners, 10, 'time', 'DESC');
    changeClassList(cellTime, 'decrease', 'increase');
    cellTime.innerHTML = 'Best Time (seconds) &#8595';
  } else if (checkClass(cellTime, 'increase')) {
    preparationWins(objState.pageWinners, 10, 'time', 'ASC');
    changeClassList(cellTime, 'increase', 'decrease');
    cellTime.innerHTML = 'Best Time (seconds) &#8593';
  }
  cellWins.innerHTML = 'Wins';
};

cellTime.addEventListener('click', sortTime);
cellWins.addEventListener('click', sortWins);
