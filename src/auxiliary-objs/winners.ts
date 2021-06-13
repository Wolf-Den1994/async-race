import { OrderType, SortType } from '../utils/types';

interface IWinnersObject {
  page: number;
  totalCount: number;
  limit: number;
  numForIteratTable: number;
  sort: SortType;
  order: OrderType;
}

export const winnersObj: IWinnersObject = {
  page: 1,
  totalCount: 0,
  limit: 0,
  numForIteratTable: 0,
  sort: 'id',
  order: 'ASC',
};
