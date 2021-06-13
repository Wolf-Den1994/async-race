interface IGarageObject {
  totalCount: number;
  page: number;
  carsCout: number;
  carColor: string[];
  limit: number;
  idSelectCar: number;
  carId: number[];
}

export const garageObj: IGarageObject = {
  totalCount: 0,
  page: 1,
  carsCout: 0,
  carColor: [],
  limit: 0,
  idSelectCar: 0,
  carId: [],
};
