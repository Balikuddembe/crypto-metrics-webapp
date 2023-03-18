import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import NavBar from '../components/NavBar';
import CoinsItems from '../components/CoinsItems';
import CoinsDetails from '../components/CoinsDetails';

describe('Tests for react components', () => {
  it('Header component should render correctly', () => {
    const header = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <NavBar />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
    expect(header).toMatchSnapshot();
  });
  it('Coin list component should render correctly', () => {
    const list = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <CoinsItems />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
    expect(list).toMatchSnapshot();
  });
  it('Coin details component should render correctly', () => {
    const details = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <CoinsDetails />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
    expect(details).toMatchSnapshot();
  });
});
