import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const StyledHeader = styled.header`
    background-color: #24305e;
    color: white;
    
    padding: 0 10%;
    height: 4rem;
    
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
`;

const Logo = styled.img`
    height: 2rem;
    margin-right: .5rem;
`;

const NavBar = styled.ul`
    list-style: none;
    justify-self: end;
`;

const NavItem = styled.li`
    display: inline-block;
    min-width: 4rem;
    text-align: right;
    margin-left: 1rem;
`;

const Header = () => (
    <StyledHeader>
        <Logo src={logo} alt="credito" />
        <NavBar>
            <NavItem>Dashboard</NavItem>
            <NavItem>Statements</NavItem>
            <NavItem>Payments</NavItem>
            <NavItem>My Account</NavItem>
        </NavBar>
    </StyledHeader>
);

export default Header;
