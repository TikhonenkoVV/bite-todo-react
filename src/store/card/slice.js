import { createSlice } from '@reduxjs/toolkit';
import { addTask, editTask } from './operation';

const initialState = {
  task: [],
  isLoading: false,
  error: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.task.push(payload.task);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(editTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(editTask.fulfilled, (state, { payload }) => {
        const editedTaskIndex = state.task.findIndex(
          task => task._id === payload.task._id
        );

        if (editedTaskIndex !== -1) {
          state.task[editedTaskIndex] = payload.task;
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default taskSlice.reducer;
