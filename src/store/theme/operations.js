import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const biteTodoInnstance = axios.create({
  baseURL: 'https://bite-todo-rest-api.onrender.com/api',
});

export const setTheme = createAsyncThunk(
  'theme/selectTheme',
  async (themeName, { rejectWithValue }) => {
    try {
      const { data } = await biteTodoInnstance.patch('/auth', {
        theme: themeName,
      });
      return data.theme;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);
