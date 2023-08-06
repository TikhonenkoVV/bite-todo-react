import { createSelector } from '@reduxjs/toolkit';

const selectBoards = state => state.boards.boards;
const selectIsLoading = state => state.boards.isLoading;
const selectError = state => state.boards.error;

export const selectBoardsState = createSelector(
  [selectBoards, selectIsLoading, selectError],
  (boards, isLoading, error) => {
    return { boards, isLoading, error };
  }
);
