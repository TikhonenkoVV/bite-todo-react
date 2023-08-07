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
  async ({ id, title, background, dashboardIcon }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/boards/${id}`, {
        title,
        background,
        dashboardIcon,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoards = createAsyncThunk(
  'board/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/boards/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
