import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: '', email: '', profilePic: '' },
  token: null,
  isRegistered: false,
  isLoggedIn: false,
  isLoggingIn: false,
  isRefreshing: false,
  error: null,
};

// isLoggingIn , isRefreshing додано для того, щоб можна було показати loader. 

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: buider => {
    buider
      .addCase(register.pending, (state, action) => {
        state.isRegistered = false;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isRegistered = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isRegistered = false;
        state.error = action.payload;
      })
      .addCase(logIn.pending, (state, action) => {
        state.isLoggingIn = true;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggingIn = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.user = { name: '', email: '', profilePic: '' };
        state.isLoggingIn = false;
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: '', email: '', profilePic: '' };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
