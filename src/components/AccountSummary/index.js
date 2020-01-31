import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    background-color: red;
    padding: 1rem;
`;

const AccountSummary = () => {
    return (
        <StyledSection>
            <h3>Account Summary</h3>
        </StyledSection>
    );
};

export default AccountSummary;