import { gettings } from '../api/api';
import { renderingMainGarage } from '../page-garage/main';
import { objGeneralState } from '../state/general-state';

const gettingsCars = async function gettingsCarsForRendering() {
  const answer = await gettings(objGeneralState.page, 7);
  // console.log(answer.data[0].color);
  objGeneralState.totalCount = Number(
    answer.response.headers.get('X-Total-Count'),
  );
  // console.log(objGeneralState.totalCount);
  for (let i = 0; i < objGeneralState.totalCount; i++) {
    objGeneralState.carColor.push(answer.data[i].color);
  }

  renderingMainGarage(objGeneralState.page, answer.data);
};
export const exp = gettingsCars();
