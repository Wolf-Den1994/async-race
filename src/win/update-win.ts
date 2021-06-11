import { updateWinner } from '../api/api';
import { IWinner } from '../interfaces/winner';

export const updateWin = async function updateWinAfterRace(
  id: number,
  body: IWinner,
): Promise<void> {
  // console.log('putWin', body);
  updateWinner(id, body);
};
