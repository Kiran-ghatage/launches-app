import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  launches: [],
  status: 'idle',
  error: null,
};

export const fetchLaunches = createAsyncThunk('launches/fetchLaunches', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/launches');
  return response.data;
});

const launchesSlice = createSlice({
  name: 'launches',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchLaunches.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLaunches.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.launches = action.payload;
      })
      .addCase(fetchLaunches.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default launchesSlice.reducer;
