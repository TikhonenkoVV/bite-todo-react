import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (values, thunkAPI) => {
    try {
      const response = await axios.post(`/api/tasks`, values);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
