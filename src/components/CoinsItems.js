import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCoins } from '../redux/coinsItems/coinsItemsSlice';

const CoinsItems = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);
  return (
    <></>
  );
};

export default CoinsItems;
