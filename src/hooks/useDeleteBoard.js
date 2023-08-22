import { useSelector } from 'react-redux';
import { selectBoardsState } from 'store/boards/selectors';
import { selectColumns } from 'store/columns/selectors';

export const useDeleteBoard = id => {
  const { boards, error } = useSelector(selectBoardsState);
  const isDeleteBoard = boards.find(({ _id }) => _id === id);
  console.log('hook', isDeleteBoard, error);
  return {
    isDeleteBoard,
  };
};

export const useDeleteColumn = id => {
  const columns = useSelector(selectColumns);
  const isDeleteColumn = columns.find(({ _id }) => _id === id);

  return {
    isDeleteColumn,
  };
};
