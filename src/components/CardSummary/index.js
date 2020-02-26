import React from 'react';
import styled from 'styled-components';
import Card from '../Card'
import Link from '../Link';

const StyledSection = styled.section`
    margin-bottom: 1rem;
    text-align: center;
    background-color: #fafafa;
    border: 1px #f0f0f0 solid;
    padding: 1.2rem 1rem;
`;

const CardSummary = ({ cardDetails }) => {
    const { cardNumber, cardExpiry, cardName } = cardDetails;

    return (
        <StyledSection>
            <Card cardNumber={cardNumber} expiryDate={cardExpiry} name={cardName} />
            <Link href='#'>Switch card</Link>
        </StyledSection>
    );
};

export default CardSummary;