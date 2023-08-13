import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const biteTodoInnstance = axios.create({
  baseURL: 'https://bite-todo-rest-api.onrender.com/api',
});

export const setTheme = createAsyncThunk(
  'auth/selectTheme',
  async (theme, thunkAPI) => {
    try {
      const { data } = await biteTodoInnstance.patch('/auth/theme', theme);
      return data.theme;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);
