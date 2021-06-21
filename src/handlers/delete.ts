import { remove, removeWinners } from '../api/api';
import { reRendering } from './re-rendering';

export const deleteCar = async function deleteNewCarOnPage(
  id: number,
): Promise<void> {
  await remove(id);
  await removeWinners(id);
  reRendering();
};
