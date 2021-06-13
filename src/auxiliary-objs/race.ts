interface IRaceObject {
  idAnimation: number[];
  arrIdCar: number[];
  isWin: number;
  numCarsRunning: number;
  isRace: boolean;
  countDriveForReset: number;
  countStoppedForRace: number;
}

export const raceObj: IRaceObject = {
  idAnimation: [],
  arrIdCar: [],
  isWin: 0,
  numCarsRunning: 0,
  isRace: true,
  countDriveForReset: 0,
  countStoppedForRace: 0,
};
