import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Column } from '../MainDashboard/Column';
import { ColumnListStyled } from './ColunmList.styled';
import { selectBoards } from 'store/boards/selectors';
import { selectColumns } from 'store/columns/selectors';
import { getColumns } from 'store/columns/operations';

// const columns = [
//   {
//     id: '1',
//     title: 'To do',
//   },
//   {
//     id: '2',
//     title: 'In progress',
//   },
//   {
//     id: '3',
//     title: 'Done',
//   },
//   {
//     id: '4',
//     title: 'To do',
//   },
//   {
//     id: '5',
//     title: 'In progress',
//   },
//   {
//     id: '6',
//     title: 'Done',
//   },
// ];

export const ColumnList = ({ boardName }) => {
  const dispatch = useDispatch();
  const boards = useSelector(selectBoards);
  const columns = useSelector(selectColumns);

  useEffect(() => {
    const selectedBoard = boards.find(
      board => board.title === boardName.trim()
    );
    dispatch(getColumns(selectedBoard._id));
  }, [dispatch, boardName, columns, boards]);

  return (
    <ColumnListStyled>
      {columns.map(({ id, title }) => {
        return <Column key={id} id={id} title={title} />;
      })}
    </ColumnListStyled>
  );
};
