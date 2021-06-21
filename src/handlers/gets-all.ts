import { gettings } from '../api/api';
import { garageObj } from '../auxiliary-objs/garage';
import { renderingMainGarage } from '../page-garage/main';
import { limitCars, totalCount } from '../utils/const';

export const gettingsCars = async function getsCarsRendr(): Promise<void> {
  const carsData = await gettings(garageObj.page, limitCars);
  garageObj.totalCount = Number(carsData.response.headers.get(totalCount));
  let numberOfPages = 0;
  if (garageObj.totalCount > limitCars) {
    numberOfPages = Math.ceil(garageObj.totalCount / limitCars);
    for (let i = 1; i <= numberOfPages; i++) {
      if (numberOfPages === garageObj.page) {
        garageObj.limit = garageObj.totalCount % limitCars;
      } else {
        garageObj.limit = limitCars;
      }
    }
  } else {
    garageObj.limit = garageObj.totalCount;
  }

  for (let i = 0; i < garageObj.limit; i++) {
    garageObj.carId.push(carsData.data[i].id);
    garageObj.carColor.push(carsData.data[i].color);
  }
  renderingMainGarage(garageObj.page, carsData.data);
};
export const exp = gettingsCars();
