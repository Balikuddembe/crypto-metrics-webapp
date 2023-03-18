import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoinsDetails from './components/CoinsDetails';
import CoinsItems from './components/CoinsItems';
import NavBar from './components/NavBar';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<CoinsItems />} />
      <Route path="/details/:id/" element={<CoinsDetails />} />
    </Routes>
  </Router>
);

export default App;
