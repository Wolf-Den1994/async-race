import { createWinner } from '../api/api';
import { IWinner } from '../interfaces/winner';

export const createWin = async function createWinAfterRace(
  body: IWinner,
): Promise<void> {
  createWinner(body);
};
