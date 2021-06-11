import { getWinners } from '../api/api';
import { renderingWinners } from '../page-winners/main';
import { objState } from '../state/general-state';

export const preparationWins = async function preparationBeforeRenderingWinners(
): Promise<void> {
  objState.pageWinners = 1;
  const answer = await getWinners(objState.pageWinners, 10, 'id', 'ASC');
  objState.totalCountWinners = Number(
    answer.response.headers.get('X-Total-Count'),
  );
  let numberOfPages = 0;
  if (objState.totalCountWinners > 10) {
    numberOfPages = Math.ceil(objState.totalCountWinners / 10);
    for (let i = 1; i <= numberOfPages; i++) {
      // console.log(i);
      if (numberOfPages === objState.pageWinners) {
        objState.limitWinner = objState.totalCountWinners % 10;
      } else {
        objState.limitWinner = 10;
      }
    }
  } else {
    objState.limitWinner = objState.totalCountWinners;
  }
  // console.log(objState.limitWinner)
  renderingWinners(objState.pageWinners, answer.data);
};
