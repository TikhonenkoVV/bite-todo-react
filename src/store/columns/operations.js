import { biteTodoInnstance } from 'store/auth/operations';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getColumns = createAsyncThunk(
  'columns/get',
  async (boardId, thunkAPI) => {
    try {
      const { data } = await biteTodoInnstance.get(
        `/boards/${boardId}/columnstasks`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  'columns/add',
  async ({ boardId, title }, thunkAPI) => {
    try {
      const { data } = await biteTodoInnstance.post(
        `/boards/${boardId}/columns`,
        {
          title,
        }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'columns/edit',
  async ({ boardId, id, title }, thunkAPI) => {
    try {
      const { data } = await biteTodoInnstance.put(
        `/boards/${boardId}/columns/${id}`,
        {
          title,
        }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'columns/delete',
  async ({ boardId, columnId }, thunkAPI) => {
    try {
      const { data } = await biteTodoInnstance.delete(
        `/boards/${boardId}/columns/${columnId}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (
    { title, description, priority, deadline, boardId, columnId },
    thunkAPI
  ) => {
    try {
      const { data } = await biteTodoInnstance.post(
        `/boards/${boardId}/columns/${columnId}/tasks`,
        { title, description, priority, deadline }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async (
    { title, description, priority, deadline, boardId, columnId, taskId },
    thunkAPI
  ) => {
    try {
      const { data } = await biteTodoInnstance.put(
        `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
        { title, description, priority, deadline }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async ({ boardId, columnId, taskId }, thunkAPI) => {
    try {
      const { data } = await biteTodoInnstance.delete(
        `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`
      );
      return { ...data, boardId, columnId, taskId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
