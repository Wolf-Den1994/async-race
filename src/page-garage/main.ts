import { IData } from '../api/api';
import { objGeneralState } from '../state/general-state';
import { getSvg } from './car-svg';
import { garage } from './garage';

const mainDivGarage = document.createElement('main');
mainDivGarage.className = 'main main-garage';

const mainTitleGarage = document.createElement('h2');
mainTitleGarage.className = 'main-garage-title';

const mainTitlePage = document.createElement('h3');
mainTitlePage.className = 'main-page-title';

const carDiv = document.createElement('div');
carDiv.className = 'cars';

export async function renderingMainGarage(
  page: number,
  cars: IData[],
): Promise<void> {
  garage.append(mainDivGarage);
  mainTitleGarage.innerHTML = `Garage (${objGeneralState.totalCount})`;
  mainDivGarage.append(mainTitleGarage);

  mainTitlePage.innerHTML = `Page #${page}`;
  mainDivGarage.append(mainTitlePage);

  mainDivGarage.append(carDiv);

  const arrSvgs: Promise<string>[] = [];
  const arrNames: string[] = [];

  for (let i = 0; i < objGeneralState.totalCount; i++) {
    // const image = await getSvg();
    arrNames.push(cars[i].name);
    arrSvgs.push(getSvg());
    objGeneralState.carsCout++;
  }

  const images = await Promise.all(arrSvgs);

  for (let i = 0; i < objGeneralState.totalCount; i++) {
    // console.log(cars[i].name);
    carDiv.innerHTML += `
      <div class="car ${i + 1}">
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
