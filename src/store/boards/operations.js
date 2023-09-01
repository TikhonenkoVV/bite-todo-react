import { biteTodoInnstance } from 'store/auth/operations';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getErrorMessage } from 'utils/httpUtils';

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
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const edit = createAsyncThunk(
  'board/edit',
  async ({ id, title, background, dashboardIcon }, thunkAPI) => {
    try {
      const { data } = await biteTodoInnstance.patch(`/boards/${id}`, {
        title,
        background,
        dashboardIcon,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
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
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const sendNeedHelp = createAsyncThunk(
  'needHelp/send',
  async (message, thunkAPI) => {
    try {
      const { data } = await biteTodoInnstance.post(`/auth/help`, message);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);
