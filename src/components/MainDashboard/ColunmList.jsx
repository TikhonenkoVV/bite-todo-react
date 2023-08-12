import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Column } from '../MainDashboard/Column';
import { ColumnListStyled } from './ColunmList.styled';
import { selectColumns, selectIsLoading } from 'store/columns/selectors';
import { getColumns } from 'store/columns/operations';
import { Loader } from '../Loader/Loader';

export const ColumnList = ({ boardId }) => {
  const dispatch = useDispatch();
  const columns = useSelector(selectColumns);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!boardId) {
      return;
    }
    dispatch(getColumns(boardId));
  }, [boardId, dispatch]);

  if (isLoading) {
    return <Loader fill={'#fff'} />;
  }
  return (
        <ColumnListStyled>
          {columns.map(({ _id, title, createdAt, owner, cards }) => {
            return (
              <Column
                key={_id}
                owner={owner}
                _id={_id}
                title={title}
                createdAt={createdAt}
                cards={cards}
              />
            );
          })}
        </ColumnListStyled>
  );
};
