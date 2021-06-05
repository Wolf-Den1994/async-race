import { gettings } from '../api/api';
import { renderingMainGarage } from '../page-garage/main';
import { objState } from '../state/general-state';

export const gettingsCars = async function getsCarsRendr(): Promise<void> {
  const answer = await gettings(objState.page, 7);
  // console.log(answer);
  objState.totalCount = Number(answer.response.headers.get('X-Total-Count'));
  // console.log(objState.totalCount);
  let numberOfPages = 0;
  if (objState.totalCount > 7) {
    numberOfPages = Math.ceil(objState.totalCount / 7);
    for (let i = 1; i <= numberOfPages; i++) {
      // console.log(i);
      if (numberOfPages === objState.page) {
        objState.limit = objState.totalCount % 7;
      } else {
        objState.limit = 7;
      }
    }
  } else {
    objState.limit = objState.totalCount;
  }

  for (let i = 0; i < objState.limit; i++) {
    // console.log(i)
    objState.carId.push(answer.data[i].id);
    objState.carColor.push(answer.data[i].color);
  }

  renderingMainGarage(objState.page, answer.data);
};
export const exp = gettingsCars();
