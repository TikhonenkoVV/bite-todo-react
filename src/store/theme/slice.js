import { createSlice } from '@reduxjs/toolkit';
import { setTheme } from './operations';

const initialState = {
  theme: 'Dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(setTheme.fulfilled, (state, { payload }) => {
        state.theme = payload;
      })
      .addCase(setTheme.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const themeReducer = themeSlice.reducer;
