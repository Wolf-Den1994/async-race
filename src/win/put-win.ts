import { IWinner } from '../interfaces/winner';

export const putWin = async function putWinAfterRace(body: IWinner): Promise<void> {
  console.log('putWin', body);
};
