import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    background-color: blue;
    padding: 1rem;
`;

const CardSummary = () => {
    return (
        <StyledSection>
            <h3>Card Summary</h3>
        </StyledSection>
    );
};

export default CardSummary;