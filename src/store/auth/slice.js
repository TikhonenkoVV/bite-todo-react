import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  refreshToken,
  updateUser,
} from './operations';

const initialState = {
  user: { name: '', email: '', profilePic: '' },
  accessToken: null,
  refreshToken: null,
  isRegistered: false,
  isLoggedIn: false,
  isLoggingIn: false,
  isRefreshing: false,
  error: { message: '', status: '' },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: buider => {
    buider
      .addCase(register.pending, (state, action) => {
        state.isRegistered = false;
        state.error = { message: '', status: '' };
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isRegistered = true;
        state.error = { message: '', status: '' };
      })
      .addCase(register.rejected, (state, action) => {
        state.isRegistered = false;
        state.error = action.payload;
      })
      .addCase(logIn.pending, (state, action) => {
        state.isLoggingIn = true;
        state.isLoggedIn = false;
        state.error = { message: '', status: '' };
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.tokens.accessToken;
        state.refreshToken = action.payload.tokens.refreshToken;
        state.isLoggingIn = false;
        state.isLoggedIn = true;
        state.error = { message: '', status: '' };
      })
      .addCase(logIn.rejected, (state, action) => {
        state.user = { name: '', email: '', profilePic: '' };
        state.isLoggingIn = false;
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: '', email: '', profilePic: '' };
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.error = { message: '', status: '' };
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.error = { message: '', status: '' };
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = { message: '', status: '' };
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.error = { message: '', status: '' };
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.error = action.payload;
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
      });
  },
});

export const authReducer = authSlice.reducer;
