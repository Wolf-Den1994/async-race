import { getWinner } from '../api/api';
import { IWinner } from '../interfaces/winner';
import { toNumber } from '../utils/toNumber';
import { createWin } from './create-win';
import { putWin } from './put-win';

export const tableWork = async function workWithTableWinners(
  id: number,
  timeWinner: string,
): Promise<void> {
  const time = toNumber(timeWinner);
  const answer = await getWinner(id);
  // console.log(answer.data)
  // console.log(answer.response)
  // console.log(Object.keys(answer.response).length === 0)
  if (Object.keys(answer.data).length === 0) {
    const body: IWinner = {
      id,
      wins: 1,
      time,
    };
    // console.log('createNEW', body)
    createWin(body);
  } else {
    putWin(answer.data)
  }
};
