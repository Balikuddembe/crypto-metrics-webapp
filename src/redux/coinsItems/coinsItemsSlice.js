import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
  const response = await fetch('https://api.coinstats.app/public/v1/coins');
  const { coins } = await response.json();
  return coins;
});

const initialState = { loading: false, coinsList: [], error: '' };
const coinsItemsSlice = createSlice({
  name: 'coins',
  initialState,
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
