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
carDiv.className = 'car';

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

  const results = [];
  const resultName = [];

  for (let i = 0; i < objGeneralState.totalCount; i++) {
    // const image = await getSvg();
    resultName.push(cars[i].name);
    results.push(getSvg());
    objGeneralState.carsCout++;
  }

  const image = await Promise.all(results);

  for (let i = 0; i < objGeneralState.totalCount; i++) {
    // console.log(cars[i].name);
    carDiv.innerHTML += `
      <div class="car-header">
        <button class="btn btn-select">select</button>
        <button class="btn btn-remove">remove</button>
        <span class="car-name">${resultName[i]}</span>
      </div>
      <div class="car-subheader">
        <button class="btn btn-start">start</button>
        <button class="btn btn-stop">stop</button>
      </div>
      <div class="car-image">
        ${image[i]}
      </div>
    `;
  }
}

// <p class="car-name>${cars[i].name}</p>
