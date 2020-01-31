import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    background-color: #f8e9a1;
    padding: 1rem;
`;

const TransactionsSummary = () => {
    return (
        <StyledSection>
            <h3>Transactions Summary</h3>
        </StyledSection>
    );
};

export default TransactionsSummary;