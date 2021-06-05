import { remove } from '../api/api';
import { reRendering } from './re-rendering';

export const deleteCar = function deleteNewCarOnPage(id: number): void {
  // console.log(id)
  remove(id);
  reRendering();
};
