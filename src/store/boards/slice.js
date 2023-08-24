import { createSlice } from '@reduxjs/toolkit';
import { add, deleteBoards, edit, getBoards, sendNeedHelp } from './operations';

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
        state.error = null;
      })
      .addCase(getBoards.fulfilled, (state, { payload }) => {
        state.boards = payload.boards.reverse();
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getBoards.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(add.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(add.fulfilled, (state, { payload }) => {
        state.boards.unshift(payload.board);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(add.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(edit.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(edit.fulfilled, (state, { payload }) => {
        const index = state.boards.findIndex(
          board => board._id === payload.board._id
        );
        state.boards[index] = payload.board;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(edit.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteBoards.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteBoards.fulfilled, (state, { payload }) => {
        state.boards = state.boards.filter(
          board => board._id !== payload.board._id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteBoards.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(sendNeedHelp.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendNeedHelp.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(sendNeedHelp.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const boardsReducer = boardsSlice.reducer;
