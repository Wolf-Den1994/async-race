interface IGeneralObject {
  totalCount: number;
  page: number;
  carsCout: number;
  carsCountColor: number;
  carColor: string[];
  limit: number;
}

export const objGeneralState: IGeneralObject = {
  totalCount: 0,
  page: 1,
  carsCout: 0,
  carsCountColor: 0,
  carColor: [],
  limit: 0,
};
