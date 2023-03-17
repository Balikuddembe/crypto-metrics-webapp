import { configureStore } from '@reduxjs/toolkit';
import coinsItemsReducer from './coinsItems/coinsItemsSlice';
import detailReducer from './coinsDetails/coinsDetailsSlice';

const store = configureStore({
  reducer: {
    coins: coinsItemsReducer,
    details: detailReducer,
  },
});

export default store;
