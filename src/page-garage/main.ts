import { garageObj } from '../auxiliary-objs/garage';
import { ICarData } from '../interfaces/data';
import { Tags } from '../utils/enums';
import { getSvg } from './car-svg';
import { garage } from './garage';

const imgFinish = require('../assets/images/finish.png');

const mainDivGarage = document.createElement(Tags.MAIN);
mainDivGarage.className = 'main main-garage';

const mainTitleGarage = document.createElement(Tags.TITLE2);
mainTitleGarage.className = 'main-garage-title';

const mainTitlePage = document.createElement(Tags.TITLE3);
mainTitlePage.className = 'main-page-title';

export const carDiv = document.createElement(Tags.DIV);
carDiv.className = 'cars';

export async function renderingMainGarage(
  page: number,
  cars: ICarData[],
): Promise<void> {
  garage.append(mainDivGarage);
  mainTitleGarage.innerHTML = `Garage (${garageObj.totalCount})`;
  mainDivGarage.append(mainTitleGarage);

  mainTitlePage.innerHTML = `Page #${page}`;
  mainDivGarage.append(mainTitlePage);

  mainDivGarage.append(carDiv);

  const arrSvgs: Promise<string>[] = [];
  const arrNames: string[] = [];

  for (let i = 0; i < garageObj.limit; i++) {
    const color = garageObj.carColor;
    arrNames.push(cars[i].name);
    arrSvgs.push(getSvg(color, i, i));
    garageObj.carsCount++;
  }

  const images = await Promise.all(arrSvgs);

  for (let i = 0; i < garageObj.limit; i++) {
    carDiv.innerHTML += `
      <div class="car ${cars[i].id}">
        <div class="car-header">
          <button class="btn btn-select">select</button>
          <button class="btn btn-remove">remove</button>
          <span class="car-name">${arrNames[i]}</span>
        </div>
        <div class="car-subheader">
          <button class="btn btn-start">start</button>
          <button class="btn btn-stop" disabled>stop</button>
        </div>
        <div class="flag-finish">
          <img src="${imgFinish}" alt="finish">
        </div>
        <div class="car-image">
          ${images[i]}
        </div>
      </div>
    `;
  }
}
