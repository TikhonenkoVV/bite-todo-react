import { createSlice } from '@reduxjs/toolkit';
import { getColumns, addColumn, editColumn, addTask } from './operations';
import { parseDate } from 'utils/dateTimeUtils';

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
        const columns = state.columns.filter(
          column => column._id !== payload._id
        );
        columns.push(payload);
        columns.forEach(a =>
          console.log(parseDate(a.createdAt), typeof parseDate(a.createdAt))
        );
        columns.sort((a, b) =>
          parseDate(a.createdAt) > parseDate(b.createdAt) ? 1 : -1
        );
        state.columns = columns;
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
        console.log(payload.column.cards);
        const column = state.columns.find(
          column => column._id === payload.column._id
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
