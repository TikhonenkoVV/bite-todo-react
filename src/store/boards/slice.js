import { createSlice } from '@reduxjs/toolkit';
import { add, edit } from './operations';

const initialState = {
  boards: [],
  isLoadingBords: false,
  errorBorads: null,
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  extraReducers: buider => {
    buider
      .addCase(add.pending, (state, { payload }) => {
        state.isLoadingBords = true;
      })
      .addCase(add.fulfilled, (state, { payload }) => {
        state.boards.push(payload.board);
        state.error = null;
      })
      .addCase(add.rejected, (state, { payload }) => {
        state.isLoadingBords = true;
        state.error = payload;
      })
      .addCase(edit.pending, (state, { payload }) => {
        state.isLoadingBords = true;
      })
      .addCase(edit.fulfilled, (state, { payload }) => {
        state.boards = state.boards.filter(
          board => board._id === payload.board._id
        );
        state.boards.push(payload.board);
        state.error = null;
      })
      .addCase(edit.rejected, (state, { payload }) => {
        state.isLoadingBords = true;
        state.error = payload;
      });
  },
});

export const boardsReducer = boardsSlice.reducer;
