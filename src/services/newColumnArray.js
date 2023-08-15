import { reorder } from 'utils/dragAndDrop';

export const createNewColumnArray = (arr, oldIndex, newIndex) => {
  return reorder(arr, oldIndex, newIndex);
};
