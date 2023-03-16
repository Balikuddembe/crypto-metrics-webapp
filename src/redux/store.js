import { configureStore } from '@reduxjs/toolkit';
import coinsItemsReducer from './coinsItems/coinsItemsSlice';

const store = configureStore({
  reducer: {
    coins: coinsItemsReducer,
  },
});

export default store;
