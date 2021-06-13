import { getCar } from '../api/api';
import { raceObj } from '../auxiliary-objs/race';
import { winnerDiv } from '../page-garage/winner';
import { ElemClasses } from '../utils/enums';
import { removeClassList } from '../utils/remove-class';
import { tableWork } from '../win/table-work';

const conversion = 1000;

export const win = async function winningRace(
  id: number,
  time: number,
): Promise<void> {
  const answer = await getCar(id);
  raceObj.numCarsRunning++;
  const timeWinner = (time / conversion).toFixed(2);
  if (!raceObj.isWin) {
    winnerDiv.innerHTML = `${answer.name} won [${timeWinner}sec]!`;
    removeClassList(winnerDiv, ElemClasses.Hidden);
    tableWork(id, timeWinner);
  }
  raceObj.isWin++;
};
