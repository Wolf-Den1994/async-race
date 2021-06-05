interface IGeneralObject {
  totalCount: number;
  page: number;
  carsCout: number;
  carsCountColor: number;
  carColor: string[];
  limit: number;
  idSelectCar: number;
}

export const objState: IGeneralObject = {
  totalCount: 0,
  page: 1,
  carsCout: 0,
  carsCountColor: 0,
  carColor: [],
  limit: 0,
  idSelectCar: 0,
};
