import { getWinners, OrderType, SortType } from '../api/api';
import { renderingWinners } from '../page-winners/main';
import { objState } from '../state/general-state';

export const preparationWins = async function preparationBeforeRenderingWinners(
  page: number,
  limit = 10,
  sorting: SortType = 'id',
  order: OrderType = 'ASC',
): Promise<void> {
  const answer = await getWinners(objState.pageWinners, limit, sorting, order);
  // const answer = await getWinners(objState.pageWinners, 10, 'id', 'ASC');
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
  // console.log('rend')
  renderingWinners(objState.pageWinners, answer.data);
};
