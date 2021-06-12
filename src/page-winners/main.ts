import { getCar } from '../api/api';
import { IWinner } from '../interfaces/winner';
import { getSvg } from '../page-garage/car-svg';
import { objState } from '../state/general-state';
import { tbodyWinners } from './winners-table';
import { mainSubTitleWinners, mainTitleWinners } from './winners-title';

export const renderingWinners = async function renderingMainWinners(
  page: number,
  win: IWinner[],
): Promise<void> {
  // console.log(page, win);

  mainTitleWinners.innerHTML = `Winners (${objState.totalCountWinners})`;
  mainSubTitleWinners.innerHTML = `Page #${page}`;
  // console.log(objState.pageWinners)

  const arrColors: string[] = [];
  const cars = [];

  for (let i = 0; i < win.length; i++) {
    cars.push(getCar(win[i].id));
    // const car = await getCar(win[i].id);
    // arr.push(car.color);
    // objState.carsCout++;
  }
  // console.log(arr)
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
  // console.log(images)

  for (let i = 0; i < win.length; i++) {
    // const car = await getCar(win[i].id);
    // arr.push(car.color)
    // const image = await getSvg(arr, win[i].id - 1)
    const carName = receivedCars[i].name;
    tbodyWinners.innerHTML += `
      <tr>
        <td>${objState.numForIteratTable + i + 1}</td>
        <td>${images[i]}</td>
        <td>${carName}</td>
        <td>${win[i].wins}</td>
        <td>${win[i].time}</td>
      </tr>
    `;
  }
};
