import { gettings } from '../api/api';
import { renderingMainGarage } from '../page-garage/main';
import { objGeneralState } from '../state/general-state';

export const gettingsCars = async function gettingsCarsForRendering(): Promise<void> {
  const answer = await gettings(objGeneralState.page, 7);
  // console.log(answer);
  objGeneralState.totalCount = Number(
    answer.response.headers.get('X-Total-Count'),
  );
  // console.log(objGeneralState.totalCount);
  let numberOfPages = 0;
  if (objGeneralState.totalCount > 7) {
    numberOfPages = Math.ceil(objGeneralState.totalCount / 7);
    for (let i = 1; i <= numberOfPages; i++) {
      // console.log(i);
      if (numberOfPages === objGeneralState.page) {
        objGeneralState.limit = objGeneralState.totalCount % 7;
      } else {
        objGeneralState.limit = 7;
      }
    }
  } else {
    objGeneralState.limit = objGeneralState.totalCount;
  }

  for (let i = 0; i < objGeneralState.limit; i++) {
    // console.log(i)
    objGeneralState.carColor.push(answer.data[i].color);
  }

  renderingMainGarage(objGeneralState.page, answer.data);
};
export const exp = gettingsCars();
