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
  const answer = await getWinner(id);
  if (Object.keys(answer.data).length === 0) {
    const body: IWinner = {
      id,
      wins: startCounter,
      time,
    };
    createWin(body);
  } else if (time < answer.data.time) {
    answer.data.time = time;
    answer.data.wins++;
    updateWin(id, answer.data);
  } else {
    answer.data.wins++;
    updateWin(id, answer.data);
  }
};
