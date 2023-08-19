import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from 'store/store';
import { BASE_URL } from 'services/constants';

export const biteTodoInnstance = axios.create({
  baseURL: `${BASE_URL}/api`,
});

const setAuthHeader = token => {
  biteTodoInnstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  biteTodoInnstance.defaults.headers.common.Authorization = '';
};

biteTodoInnstance.interceptors.response.use(
  responce => responce,
  async error => {
    if (error.response.status === 401 && !error.config._retry) {
      try {
        error.config._retry = true;
        await store.dispatch(refreshToken());
        const newToken = store.getState().auth.accessToken;
        error.config.headers.Authorization = `Bearer ${newToken}`;
        setAuthHeader(newToken);
        return biteTodoInnstance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      await biteTodoInnstance.post('/auth/register', credentials);
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status,
      });
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await biteTodoInnstance.post('/auth/login', credentials);
      setAuthHeader(data.tokens.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status,
      });
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await biteTodoInnstance.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue({
      message: error.response.data.message,
      status: error.response.status,
    });
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue({
        message: 'Unable to fetch user',
        status: '',
      });
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await biteTodoInnstance.get('/auth/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status,
      });
    }
  }
);

export const refreshToken = createAsyncThunk(
  'auth/refreshtoken',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.refreshToken;

    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }

    try {
      const { data } = await biteTodoInnstance.post('/auth/refresh', {
        refreshToken: persistToken,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status,
      });
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (userData, thunkAPI) => {
    try {
      const { data } = await biteTodoInnstance.patch('/auth', userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status,
      });
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (avatarFile, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatarURL', avatarFile);

      const { data } = await biteTodoInnstance.patch('/auth/avatars', formData);
      return data.avatarURL;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status,
      });
    }
  }
);
