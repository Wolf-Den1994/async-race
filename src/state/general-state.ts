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
  countDriveForReset: number;
  countDriveForRace: number;
  pageWinners: number;
  totalCountWinners: number;
  limitWinner: number;
  carColorForWinners: string[];
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
  countDriveForReset: 0,
  countDriveForRace: 0,
  pageWinners: 0,
  totalCountWinners: 0,
  limitWinner: 0,
  carColorForWinners: [],
};
