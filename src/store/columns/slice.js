import { createSlice } from '@reduxjs/toolkit';
import { getColumns, addColumn, editColumn, addTask } from './operations';

const initialState = {
  columns: [],
  isLoading: false,
  error: null,
};

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  extraReducers: buider => {
    buider
      .addCase(getColumns.pending, (state, { payload }) => {
        state.isLoading = true;
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
      .addCase(addTask.pending, state => {
        state.isLoading = true;
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
      });
  },
});

export const columnsReducer = columnsSlice.reducer;
