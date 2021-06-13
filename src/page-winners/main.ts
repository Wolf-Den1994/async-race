import { getCar } from '../api/api';
import { winnersObj } from '../auxiliary-objs/winners';
import { IWinner } from '../interfaces/winner';
import { getSvg } from '../page-garage/car-svg';
import { tbodyWinners } from './winners-table';
import { mainSubTitleWinners, mainTitleWinners } from './winners-title';

export const renderingWinners = async function renderingMainWinners(
  page: number,
  win: IWinner[],
): Promise<void> {
  mainTitleWinners.innerHTML = `Winners (${winnersObj.totalCount})`;
  mainSubTitleWinners.innerHTML = `Page #${page}`;

  const arrColors: string[] = [];
  const cars = [];

  for (let i = 0; i < win.length; i++) {
    cars.push(getCar(win[i].id));
  }
  const receivedCars = await Promise.all(cars);

  for (let i = 0; i < win.length; i++) {
    arrColors.push(receivedCars[i].color);
  }

  const arrSvgs: Promise<string>[] = [];
  for (let i = 0; i < win.length; i++) {
    arrSvgs.push(getSvg(arrColors, i, i + 10));
  }
  tbodyWinners.innerHTML = '';

  const images = await Promise.all(arrSvgs);

  for (let i = 0; i < win.length; i++) {
    const carName = receivedCars[i].name;
    tbodyWinners.innerHTML += `
      <tr>
        <td>${winnersObj.numForIteratTable + i + 1}</td>
        <td>${images[i]}</td>
        <td>${carName}</td>
        <td>${win[i].wins}</td>
        <td>${win[i].time}</td>
      </tr>
    `;
  }
};
