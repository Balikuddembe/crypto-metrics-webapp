import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../Images/menu.png';
import arrow from '../Images/arrow_back.svg';
import '../styles/NavBar.css';

const NavBar = () => (
  <header>
    <div className="left">
      <Link to="/">
        <img src={arrow} alt="arrow-back" />
      </Link>
      <h1>Cryptocurrency</h1>
    </div>
    <img src={menu} alt="img" />
  </header>
);

export default NavBar;
