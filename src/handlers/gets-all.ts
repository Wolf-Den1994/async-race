import { gettings } from '../api/api';
import { renderingMainGarage } from '../page-garage/main';
import { objState } from '../state/general-state';
import { limitCars, totalCount } from '../utils/const';

export const gettingsCars = async function getsCarsRendr(): Promise<void> {
  const answer = await gettings(objState.page, limitCars);
  objState.totalCount = Number(answer.response.headers.get(totalCount));
  let numberOfPages = 0;
  if (objState.totalCount > limitCars) {
    numberOfPages = Math.ceil(objState.totalCount / limitCars);
    for (let i = 1; i <= numberOfPages; i++) {
      if (numberOfPages === objState.page) {
        objState.limit = objState.totalCount % limitCars;
      } else {
        objState.limit = limitCars;
      }
    }
  } else {
    objState.limit = objState.totalCount;
  }

  for (let i = 0; i < objState.limit; i++) {
    objState.carId.push(answer.data[i].id);
    objState.carColor.push(answer.data[i].color);
  }

  renderingMainGarage(objState.page, answer.data);
};
export const exp = gettingsCars();
