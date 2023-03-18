import coinsItemsReducer, { fetchCoins } from '../redux/coinsItems/coinsItemsSlice';

describe('coins reducer', () => {
  it('should return the initial state', () => {
    expect(coinsItemsReducer(undefined, {})).toEqual({
      loading: false,
      coinsList: [],
      error: '',
    });
  });

  it('should handle fetchCoins.pending', () => {
    expect(
      coinsItemsReducer(undefined, { type: fetchCoins.pending.type }),
    ).toEqual({
      loading: true,
      coinsList: [],
      error: '',
    });
  });

  it('should handle fetchCoins.fulfilled', () => {
    expect(
      coinsItemsReducer(undefined, {
        type: fetchCoins.fulfilled.type,
        payload: [{ name: 'Bitcoin', price: 50000 }],
      }),
    ).toEqual({
      loading: false,
      coinsList: [{ name: 'Bitcoin', price: 50000 }],
      error: '',
    });
  });

  it('should handle fetchCoins.rejected', () => {
    expect(
      coinsItemsReducer(undefined, {
        type: fetchCoins.rejected.type,
        error: { message: 'Network error' },
      }),
    ).toEqual({
      loading: false,
      coinsList: [],
      error: 'Network error',
    });
  });
});
