import { useSelector } from 'react-redux';
import { selectBoardsState } from 'store/boards/selectors';
import { selectColumns } from 'store/columns/selectors';

export const useDeleteBoard = id => {
  const { boards } = useSelector(selectBoardsState);
  const isDeleteBoard = boards.find(({ _id }) => _id === id);

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
