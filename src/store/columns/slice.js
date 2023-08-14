import { createSlice } from '@reduxjs/toolkit';
import {
  getColumns,
  addColumn,
  editColumn,
  deleteColumn,
  addTask,
  editTask,
  deleteTask,
} from './operations';
import { reorder, reorderCardsByColumnId } from '../../utils/dragAndDrop';

const initialState = {
  columns: [],
  isLoading: false,
  error: null,
};

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    moveColumns: (state, { payload }) => {
      state.columns = reorder(
        state.columns,
        payload.sourceIndex,
        payload.destinationIndex
      );
    },
    moveCards: (state, { payload }) => {
      const cardsByColumnIdMap = state.columns.reduce((acc, column) => {
        acc[column._id] = column.cards;

        return acc;
      }, {});
      const updatedCardsByColumnIdMap = reorderCardsByColumnId(
        cardsByColumnIdMap,
        payload.source,
        payload.destination
      );
      const newColumnsState = state.columns.map(column => ({
        ...column,
        cards: updatedCardsByColumnIdMap.cardsByColumnId[column._id],
      }));

      state.columns = newColumnsState;
    },
  },
  extraReducers: buider => {
    buider
      .addCase(getColumns.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getColumns.fulfilled, (state, { payload }) => {
        state.columns = payload.columns;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getColumns.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addColumn.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addColumn.fulfilled, (state, { payload }) => {
        state.columns.push(payload.column);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addColumn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(editColumn.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editColumn.fulfilled, (state, { payload }) => {
        const column = state.columns.find(
          column => column._id === payload.column._id
        );
        column.title = payload.column.title;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editColumn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteColumn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteColumn.fulfilled, (state, { payload }) => {
        state.columns = state.columns.filter(
          column => column._id !== payload.column._id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteColumn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addTask.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, { payload }) => {
        const column = state.columns.find(
          column => column._id === payload.task.owner
        );
        column.cards.push(payload.task);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(editTask.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editTask.fulfilled, (state, { payload }) => {
        const column = state.columns.find(
          column => column._id === payload.task.owner
        );
        const index = column.cards.findIndex(
          card => card._id === payload.task._id
        );
        column.cards[index] = payload.task;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteTask.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        const { columnId, taskId } = payload;
        const column = state.columns.find(column => column._id === columnId);
        column.cards = column.cards.filter(card => card._id !== taskId);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const columnsReducer = columnsSlice.reducer;
export const columnsActions = columnsSlice.actions;
