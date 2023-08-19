import { useSelector } from 'react-redux';
import { selectBoardsState } from 'store/boards/selectors';

export const useDeleteBoard = id => {
  const { boards } = useSelector(selectBoardsState);
  const isDeleteBoard = boards.find(({ _id }) => _id === id);

  return {
    isDeleteBoard,
  };
};
