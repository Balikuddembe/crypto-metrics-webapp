import React from 'react';
import { Link } from 'react-router-dom';
import cryptoImg from '../Images/cryptoImg.jpg';
import arrow from '../Images/arrow-icon.png';

const NavBar = () => (
  <header>
    <div className="left">
      <Link to="/">
        <img src={arrow} alt="arrow-back" />
      </Link>
      <h1>Cryptocurrency</h1>
    </div>
    <img src={cryptoImg} alt="img" />
  </header>
);

export default NavBar;
