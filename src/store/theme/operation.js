import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const setTheme = createAsyncThunk(
  'auth/selectTheme',
  async (theme, thunkAPI) => {
    try {
      const { data } = await axios.patch('/auth/theme', theme);
      return data.avatarURL;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);
