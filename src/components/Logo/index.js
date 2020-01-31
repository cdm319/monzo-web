import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const StyledLogo = styled.img`
    height: 2rem;
    margin-right: .5rem;
`;

const Logo = () => (
    <StyledLogo src={logo} alt="credito" />
);

export default Logo;
