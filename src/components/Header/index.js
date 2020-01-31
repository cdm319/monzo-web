import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const StyledHeader = styled.header`
    background-color: #24305e;
    color: white;
    
    padding: 0 10%;
    height: 4rem;
    
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
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
        <Logo />
        <NavBar>
            <NavItem>Dashboard</NavItem>
            <NavItem>Statements</NavItem>
            <NavItem>Payments</NavItem>
            <NavItem>My Account</NavItem>
        </NavBar>
    </StyledHeader>
);

export default Header;
