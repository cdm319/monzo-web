import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo'

const CardContainer = styled.div`
    position: relative;
    width: 16rem;
    height: 10rem;
    border-radius: .5rem;
    margin: 0 auto 1rem auto;
    padding: 1rem;
    
    background-color: #ED5656;
    color: #fff;
    
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    font-weight: bold;
    text-align: left;
`;

const CardLogo = styled(Logo)`
`;

const CardNumber = styled.span`
    position: absolute;
    bottom: 3rem;
    left: 1rem;
`;

const CardExpiry = styled.span`
    position: absolute;
    bottom: 3rem;
    right: 1rem;
`;

const CardName = styled.span`
    position: absolute;
    bottom: 1rem;
    left: 1rem;
`;

const Card = ({ cardNumber, expiryDate, name }) => {
    return (
        <CardContainer>
            <CardLogo />
            <CardNumber>{cardNumber}</CardNumber>
            <CardExpiry>{expiryDate}</CardExpiry>
            <CardName>{name}</CardName>
        </CardContainer>
    )
};

export default Card;