import { getWinners } from '../api/api';
import { winnersObj } from '../auxiliary-objs/winners';
import { renderingWinners } from '../page-winners/main';
import { limitWinners, totalCount } from '../utils/const';
import { Order, Sort } from '../utils/enums';
import { SortType, OrderType } from '../utils/types';

export const preparationWins = async function preparationBeforeRenderingWinners(
  page: number,
  limit = limitWinners,
  sorting: SortType = Sort.ID,
  order: OrderType = Order.ASC,
): Promise<void> {
  const winnersData = await getWinners(winnersObj.page, limit, sorting, order);
  winnersObj.totalCount = Number(winnersData.response.headers.get(totalCount));
  let numberOfPages = 0;
  if (winnersObj.totalCount > limitWinners) {
    numberOfPages = Math.ceil(winnersObj.totalCount / limitWinners);
    for (let i = 1; i <= numberOfPages; i++) {
      if (numberOfPages === winnersObj.page) {
        winnersObj.limit = winnersObj.totalCount % limitWinners;
      } else {
        winnersObj.limit = limitWinners;
      }
    }
  } else {
    winnersObj.limit = winnersObj.totalCount;
  }
  renderingWinners(winnersObj.page, winnersData.data);
};
