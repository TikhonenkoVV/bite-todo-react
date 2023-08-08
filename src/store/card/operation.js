// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const addTask = createAsyncThunk(
//   'tasks/addTask',
//   async (
//     { title, description, priority, deadline, boardId, columnId },
//     thunkAPI
//   ) => {
//     try {
//       const response = await axios.post(
//         `/boards/${boardId}/columns/${columnId}/tasks`,
//         { title, description, priority, deadline }
//       );
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const editTask = createAsyncThunk(
//   'tasks/updateTask',
//   async (
//     { title, description, priority, deadline, boardId, columnId, taskId },
//     thunkAPI
//   ) => {
//     try {
//       const response = await axios.put(
//         `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
//         { title, description, priority, deadline }
//       );
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
