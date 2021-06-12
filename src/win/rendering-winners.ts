import { getWinners } from '../api/api';
import { renderingWinners } from '../page-winners/main';
import { objState } from '../state/general-state';
import { limitWinners, totalCount } from '../utils/const';
import { Order, Sort } from '../utils/enums';
import { SortType, OrderType } from '../utils/types';

export const preparationWins = async function preparationBeforeRenderingWinners(
  page: number,
  limit = limitWinners,
  sorting: SortType = Sort.ID,
  order: OrderType = Order.ASC,
): Promise<void> {
  const answer = await getWinners(objState.pageWinners, limit, sorting, order);
  objState.totalCountWinners = Number(answer.response.headers.get(totalCount));
  let numberOfPages = 0;
  if (objState.totalCountWinners > limitWinners) {
    numberOfPages = Math.ceil(objState.totalCountWinners / limitWinners);
    for (let i = 1; i <= numberOfPages; i++) {
      if (numberOfPages === objState.pageWinners) {
        objState.limitWinner = objState.totalCountWinners % limitWinners;
      } else {
        objState.limitWinner = limitWinners;
      }
    }
  } else {
    objState.limitWinner = objState.totalCountWinners;
  }
  renderingWinners(objState.pageWinners, answer.data);
};
