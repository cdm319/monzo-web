import React from 'react';
import styled from 'styled-components';
import ProgressWheel from "../ProgressWheel";

const StyledSection = styled.section`    
    table {
      font-size: 1.2rem;
      width: 100%;
      border-collapse: collapse;
      border: 1px solid #f0f0f0;
      
      th, td {
        text-align: center;
        padding: 1rem;
        background-color: #fafafa;
      }
    }
`;

const AccountSummary = ( { accountData } ) => {
    const { balance, creditLimit } = accountData;

    return (
        <StyledSection>
            <table>
                <tbody>
                <tr>
                    <td colSpan={2}>
                        <ProgressWheel size={200} progress={ (balance / creditLimit) * 100 }/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4>&pound;{ balance }</h4>
                        <p>Spent</p>
                    </td>
                    <td>
                        <h4>&pound;{ creditLimit - balance }</h4>
                        <p>Left</p>
                    </td>
                </tr>
                </tbody>
            </table>
        </StyledSection>
    );
};

export default AccountSummary;