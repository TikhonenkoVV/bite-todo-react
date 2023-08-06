import { createSlice } from '@reduxjs/toolkit';
import { add, deleteBoards, edit, getBoards } from './operations';

const initialState = {
  boards: [],
  isLoading: false,
  error: null,
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  extraReducers: buider => {
    buider
      .addCase(getBoards.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getBoards.fulfilled, (state, { payload }) => {
        state.boards = payload.boards;
        state.error = null;
      })
      .addCase(getBoards.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(add.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(add.fulfilled, (state, { payload }) => {
        state.boards.push(payload.board);
        state.error = null;
      })
      .addCase(add.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(edit.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(edit.fulfilled, (state, { payload }) => {
        const index = state.boards.findIndex(
          board => board._id === payload.board._id
        );
        state.boards[index] = payload.board;
        state.error = null;
      })
      .addCase(edit.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteBoards.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(deleteBoards.fulfilled, (state, { payload }) => {
        state.boards = state.boards.filter(
          board => board._id !== payload.board._id
        );
        state.error = null;
      })
      .addCase(deleteBoards.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const boardsReducer = boardsSlice.reducer;
