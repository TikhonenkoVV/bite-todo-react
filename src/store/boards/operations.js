import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getBoards = createAsyncThunk('boards/get', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/boards/');
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const add = createAsyncThunk(
  'board/add',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/boards/', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const edit = createAsyncThunk(
  'board/edit',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `/boards/${credentials.id}`,
        credentials
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
