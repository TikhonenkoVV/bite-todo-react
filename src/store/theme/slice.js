import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'Dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, { payload }) {
      state.theme = payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
