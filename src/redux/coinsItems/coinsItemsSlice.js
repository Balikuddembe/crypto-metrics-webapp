import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.coinstats.app/public/v1/coins';
export const fetchCoins = createAsyncThunk('GET/coins/fetchCoins', async () => {
  const response = await axios.get(URL);
  // console.log('fetched data:', response.data);
  return response.data;
});

const initialState = { loading: false, coinsList: [], error: '' };
const coinsItemsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.pending, (state) => {
      const newState = { ...state, loading: true };
      return newState;
    });
    builder.addCase(fetchCoins.fulfilled, (state, action) => {
      const newState = { ...state, coinsList: action.payload, loading: false };
      return newState;
    });
    builder.addCase(fetchCoins.rejected, (state, action) => {
      const newState = { ...state, coinsList: [], error: action.error.message };
      return newState;
    });
  },
});

export default coinsItemsSlice.reducer;
