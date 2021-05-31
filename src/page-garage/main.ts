import { garage } from './garage';

const mainDivGarage = document.createElement('main');
mainDivGarage.className = 'main main-garage';
garage.append(mainDivGarage);

const mainTitleGarage = document.createElement('h2');
mainTitleGarage.className = 'main-garage-title';
mainTitleGarage.innerHTML = `Garage (COUNTER CARS)`;
mainDivGarage.append(mainTitleGarage);
