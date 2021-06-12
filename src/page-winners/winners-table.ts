import { winners } from './winners';

const tableWinners = document.createElement('table');
winners.append(tableWinners);

const theadWinners = document.createElement('thead');
tableWinners.append(theadWinners);

export const tbodyWinners = document.createElement('tbody');
tableWinners.append(tbodyWinners);

const rowTable = document.createElement('tr');
theadWinners.append(rowTable);

const cellNumber = document.createElement('th');
cellNumber.innerHTML = 'Number';
const cellCar = document.createElement('th');
cellCar.innerHTML = 'Car';
const cellName = document.createElement('th');
cellName.innerHTML = 'Name';
export const cellWins = document.createElement('th');
export const cellTime = document.createElement('th');
cellTime.innerHTML = 'Best time (seconds)';
rowTable.append(cellNumber);
rowTable.append(cellCar);
rowTable.append(cellName);
rowTable.append(cellWins);
rowTable.append(cellTime);
