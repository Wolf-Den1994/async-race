import { getWinner } from '../api/api';
import { IWinner } from '../interfaces/winner';
import { toNumber } from '../utils/toNumber';
import { createWin } from './create-win';
import { updateWin } from './update-win';

const startCounter = 1;

export const tableWork = async function workWithTableWinners(
  id: number,
  timeWinner: string,
): Promise<void> {
  const time = toNumber(timeWinner);
  const winnerData = await getWinner(id);
  if (Object.keys(winnerData.data).length === 0) {
    const body: IWinner = {
      id,
      wins: startCounter,
      time,
    };
    createWin(body);
  } else if (time < winnerData.data.time) {
    winnerData.data.time = time;
    winnerData.data.wins++;
    updateWin(id, winnerData.data);
  } else {
    winnerData.data.wins++;
    updateWin(id, winnerData.data);
  }
};
