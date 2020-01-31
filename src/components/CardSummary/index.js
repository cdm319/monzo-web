import React from 'react';
import styled from 'styled-components';
import Card from '../Card'
import Link from '../Link';

const StyledSection = styled.section`
    margin-bottom: 1rem;
    text-align:center;
`;

const CardSummary = () => {
    return (
        <StyledSection>
            <Card cardNumber='4242 4242 4242 4440' expiryDate='12/21' name='Mr J Bloggs' />
            <Link href='#'>Switch card</Link>
        </StyledSection>
    );
};

export default CardSummary;