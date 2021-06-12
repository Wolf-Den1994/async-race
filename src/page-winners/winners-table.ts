import { Tags } from '../utils/enums';
import { winners } from './winners';

const tableWinners = document.createElement(Tags.TABLE);
winners.append(tableWinners);

const theadWinners = document.createElement(Tags.THEAD);
tableWinners.append(theadWinners);

export const tbodyWinners = document.createElement(Tags.TBODY);
tableWinners.append(tbodyWinners);

const rowTable = document.createElement(Tags.TR);
theadWinners.append(rowTable);

const cellNumber = document.createElement(Tags.TH);
cellNumber.innerHTML = 'Number';
const cellCar = document.createElement(Tags.TH);
cellCar.innerHTML = 'Car';
const cellName = document.createElement(Tags.TH);
cellName.innerHTML = 'Name';
export const cellWins = document.createElement(Tags.TH);
export const cellTime = document.createElement(Tags.TH);
rowTable.append(cellNumber);
rowTable.append(cellCar);
rowTable.append(cellName);
rowTable.append(cellWins);
rowTable.append(cellTime);
