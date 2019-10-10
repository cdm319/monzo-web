import React from 'react';

import logo from './logo.svg';
import './Header.css';

const Header = () => (
    <header className="header">
        <section className="header-layout">
            <section className="logo-container">
                <img src={logo} className="logo" alt="credito" />
            </section>
            <ul className="nav-bar">
                <li>Dashboard</li>
                <li>Statements</li>
                <li>Payments</li>
                <li>My Account</li>
            </ul>
        </section>
    </header>
);

export default Header;
