interface IGarageObject {
  totalCount: number;
  page: number;
  carsCount: number;
  carColor: string[];
  limit: number;
  idSelectCar: number;
  nameSelectCar: string;
  colorSelectCar: string;
  carId: number[];
}

export const garageObj: IGarageObject = {
  totalCount: 0,
  page: 1,
  carsCount: 0,
  carColor: [],
  limit: 0,
  idSelectCar: 0,
  nameSelectCar: '',
  colorSelectCar: '',
  carId: [],
};
