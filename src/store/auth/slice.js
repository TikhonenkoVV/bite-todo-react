import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  refreshToken,
  updateUser,
  updateAvatar,
} from './operations';

const initialState = {
  user: { name: '', email: '', avatar: '', theme: 'dark' },
  accessToken: null,
  refreshToken: null,
  isRegistered: false,
  isLoggedIn: false,
  isLoggingIn: false,
  isRefreshing: false,
  isTokenRefreshed: false,
  error: { message: '', status: '' },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: buider => {
    buider
      .addCase(register.pending, (state, { payload }) => {
        state.isRegistered = false;
        state.error = { message: '', status: '' };
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isRegistered = true;
        state.error = { message: '', status: '' };
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isRegistered = false;
        state.error = payload;
      })
      .addCase(logIn.pending, (state, { payload }) => {
        state.isLoggingIn = true;
        state.isLoggedIn = false;
        state.error = { message: '', status: '' };
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.tokens.accessToken;
        state.refreshToken = payload.tokens.refreshToken;
        state.isLoggingIn = false;
        state.isLoggedIn = true;
        state.error = { message: '', status: '' };
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.user = { name: '', email: '', avatar: '', theme: 'dark' };
        state.isLoggingIn = false;
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: '', email: '', avatar: '', theme: 'dark' };
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.error = { message: '', status: '' };
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.error = { message: '', status: '' };
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = { message: '', status: '' };
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.isTokenRefreshed = true;
        state.error = { message: '', status: '' };
      })
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.error = payload;
        state.isTokenRefreshed = false;
      })
      .addCase(updateUser.pending, state => {
        state.isRefreshing = true;
        state.error = { message: '', status: '' };
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.error = { message: '', status: '' };
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(updateAvatar.fulfilled, (state, { payload }) => {
        state.user.avatar = payload;
        state.error = { message: '', status: '' };
      })
      .addCase(updateAvatar.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
