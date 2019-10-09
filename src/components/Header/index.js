import React from 'react';

import logo from './logo.svg';
import './Header.css';

const Header = () => (
    <header className="header">
        <img src={logo} className="logo" alt="Bank X" />
        <h1 className="title">Bank X</h1>
    </header>
);

export default Header;
