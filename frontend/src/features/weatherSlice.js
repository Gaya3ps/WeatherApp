// src/features/weather/weatherSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/weather';

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (city) => {
  const res = await axios.post(`${API_URL}`, { city });
  return res.data;
});

export const fetchHistory = createAsyncThunk(
  'weather/fetchHistory',
  async ({ city, from, to }) => {
    const res = await axios.get(`${API_URL}/history/range`, {
      params: { city, from, to },
    });
    return res.data;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    current: null,
    history: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.current = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.history = action.payload;
      });
  },
});

export default weatherSlice.reducer;
