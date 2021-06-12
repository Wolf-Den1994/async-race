import { getCar } from '../api/api';
import { winnerDiv } from '../page-garage/winner';
import { objState } from '../state/general-state';
import { removeClassList } from '../utils/remove-class';
import { tableWork } from '../win/table-work';

export const win = async function winningRace(
  id: number,
  time: number,
): Promise<void> {
  const answer = await getCar(id);
  objState.numCarsRunning++;
  const timeWinner = (time / 1000).toFixed(2);
  if (!objState.isWin) {
    winnerDiv.innerHTML = `${answer.name} won [${timeWinner}sec]!`;
    removeClassList(winnerDiv, 'hidden');
    tableWork(id, timeWinner);
  }
  objState.isWin++;
};
