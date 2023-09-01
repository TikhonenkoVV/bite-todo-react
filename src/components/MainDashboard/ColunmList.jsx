import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Column } from '../MainDashboard/Column';
import { ColumnListStyled } from './ColunmList.styled';
import {
  selectColumns,
  selectIsLoading,
  selectError,
} from 'store/columns/selectors';

import { editColumn, editTask, getColumns } from 'store/columns/operations';
import { Loader } from '../Loader/Loader';
import { columnsActions } from '../../store/columns/slice';
import { reorder } from 'utils/dragAndDrop';

export const ColumnList = ({ boardId }) => {
  const dispatch = useDispatch();
  const columns = useSelector(selectColumns);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (error) {
    Notify.warning(error);
  }

  useEffect(() => {
    if (!boardId) {
      return;
    }
    dispatch(getColumns(boardId));
  }, [boardId, dispatch]);

  const onDragEnd = result => {
    const { source, destination } = result;

    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }

    if (result.type === 'COLUMN') {
      dispatch(
        columnsActions.moveColumns({
          sourceIndex: source.index,
          destinationIndex: destination.index,
        })
      );
      const arr = reorder(columns, source.index, destination.index);
      arr.forEach((e, i) => {
        dispatch(editColumn({ boardId, id: e._id, title: e.title, index: i }));
      });
      return;
    }

    const sourceCol = columns.filter(
      val => val._id === result.source.droppableId
    );
    const destCol = columns.filter(
      val => val._id === result.destination.droppableId
    );
    let sourceArr = [...sourceCol[0].cards];
    let destArr = [...destCol[0].cards];
    const draggableCard = sourceArr.find(val => val._id === result.draggableId);
    sourceArr.splice(result.source.index, 1);
    destArr.splice(result.destination.index, 0, draggableCard);

    sourceArr.forEach((e, i) => {
      dispatch(
        editTask({
          title: e.title,
          description: e.description,
          priority: e.priority,
          deadline: e.deadline,
          index: i,
          columnId: e.owner,
          taskId: e._id,
        })
      );
    });
    destArr.forEach((e, i) => {
      dispatch(
        editTask({
          title: e.title,
          description: e.description,
          priority: e.priority,
          deadline: e.deadline,
          index: i,
          columnId: result.destination.droppableId,
          taskId: e._id,
        })
      );
    });
    dispatch(columnsActions.moveCards({ source, destination }));
  };

  if (isLoading) {
    return <Loader fill={'#fff'} />;
  }
  if (columns.length > 0) {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={boardId} type="COLUMN" direction="horizontal">
          {provided => (
            <ColumnListStyled
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {columns.map(({ _id, title, createdAt, owner, cards }, index) => (
                <Column
                  key={_id}
                  index={index}
                  owner={owner}
                  _id={_id}
                  title={title}
                  createdAt={createdAt}
                  cards={cards}
                />
              ))}
              {provided.placeholder}
            </ColumnListStyled>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
};
