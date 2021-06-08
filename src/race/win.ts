import { getCar } from '../api/api';
import { winnerDiv } from '../page-garage/winner';
import { objState } from '../state/general-state';
import { removeClassList } from '../utils/remove-class';

export const win = async function winningRace(
  id: number,
  time: number,
): Promise<void> {
  // console.log('isWin',objState.isWin)
  // console.log('num',objState.numCarsRunning)
  const answer = await getCar(id);
  objState.numCarsRunning++;
  const timeWinner = (time / 1000).toFixed(2);
  if (!objState.isWin) {
    // console.log(answer);
    // console.log(time);
    winnerDiv.innerHTML = `${answer.name} won [${timeWinner}sec]!`;
    removeClassList(winnerDiv, 'hidden');
  }
  objState.isWin++;
};
