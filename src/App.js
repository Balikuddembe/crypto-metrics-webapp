import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import CoinsDetails from './components/CoinsDetails';
import CoinsItems from './components/CoinsItems';
import NavBar from './components/NavBar';

const App = () => (
  <BrowserRouter>

    <NavBar />
    <Routes>
      <Route path="/" element={<CoinsItems />} />
      <Route path="/details" element={<CoinsDetails />} />
    </Routes>
  </BrowserRouter>

);

export default App;
