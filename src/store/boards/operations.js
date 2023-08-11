import { biteTodoInnstance } from 'store/auth/operations';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getBoards = createAsyncThunk('boards/get', async (_, thunkAPI) => {
  try {
    const { data } = await biteTodoInnstance.get('/boards/');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const add = createAsyncThunk(
  'board/add',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await biteTodoInnstance.post('/boards/', credentials);
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
      const { data } = await biteTodoInnstance.put(`/boards/${id}`, {
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
      const { data } = await biteTodoInnstance.delete(`/boards/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
