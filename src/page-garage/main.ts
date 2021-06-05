import { IData } from '../api/api';
import { objState } from '../state/general-state';
import { getSvg } from './car-svg';
import { garage } from './garage';

const mainDivGarage = document.createElement('main');
mainDivGarage.className = 'main main-garage';

const mainTitleGarage = document.createElement('h2');
mainTitleGarage.className = 'main-garage-title';

const mainTitlePage = document.createElement('h3');
mainTitlePage.className = 'main-page-title';

export const carDiv = document.createElement('div');
carDiv.className = 'cars';

export async function renderingMainGarage(
  page: number,
  cars: IData[],
): Promise<void> {
  // console.log(cars)
  garage.append(mainDivGarage);
  mainTitleGarage.innerHTML = `Garage (${objState.totalCount})`;
  mainDivGarage.append(mainTitleGarage);

  mainTitlePage.innerHTML = `Page #${page}`;
  mainDivGarage.append(mainTitlePage);

  mainDivGarage.append(carDiv);

  const arrSvgs: Promise<string>[] = [];
  const arrNames: string[] = [];

  for (let i = 0; i < objState.limit; i++) {
    // console.log(cars[i].name)
    // const image = await getSvg();
    arrNames.push(cars[i].name);
    arrSvgs.push(getSvg());
    objState.carsCout++;
  }

  const images = await Promise.all(arrSvgs);

  for (let i = 0; i < objState.limit; i++) {
    // console.log(cars[i].id);
    carDiv.innerHTML += `
      <div class="car ${cars[i].id}">
        <div class="car-header">
          <button class="btn btn-select">select</button>
          <button class="btn btn-remove">remove</button>
          <span class="car-name">${arrNames[i]}</span>
        </div>
        <div class="car-subheader">
          <button class="btn btn-start">start</button>
          <button class="btn btn-stop">stop</button>
        </div>
        <div class="car-image">
          ${images[i]}
        </div>
      </div>
    `;
  }
}
