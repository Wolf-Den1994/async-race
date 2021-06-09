interface IGeneralObject {
  totalCount: number;
  page: number;
  carsCout: number;
  carsCountColor: number;
  carColor: string[];
  limit: number;
  idSelectCar: number;
  carId: number[];
  idAnimation: number[];
  arrIdCar: number[];
  isWin: number;
  numCarsRunning: number;
  isRace: boolean;
}

export const objState: IGeneralObject = {
  totalCount: 0,
  page: 1,
  carsCout: 0,
  carsCountColor: 0,
  carColor: [],
  limit: 0,
  idSelectCar: 0,
  carId: [],
  idAnimation: [],
  arrIdCar: [],
  isWin: 0,
  numCarsRunning: 0,
  isRace: true,
};
