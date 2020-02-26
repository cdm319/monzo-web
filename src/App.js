import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import AccountSummary from './components/AccountSummary';
import CardSummary from "./components/CardSummary";
import TransactionsSummary from "./components/TransactionsSummary";
import {getCustomer} from './api';

const Main = styled.section`
    margin: 4rem auto;
    padding: 2rem;
    width: 80%;
    background-color: #fff;
`;

const Columns = styled.section`
    margin: 0 0 1rem 0;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 1rem;
    justify-content: space-between;
`;

const App = () => {
    const [customer, setCustomer] = useState({});

    useEffect(() => {
        const getData = async () => {
            const data = await getCustomer();
            setCustomer(data);
        };

        getData();
    }, []);

    return (
        <>
            <Header/>
            <Main>
                <Columns>
                    { customer.account && <AccountSummary accountData={ customer.account }/> }
                    <section>Payments {customer.first_name}</section>
                    { customer.card && <CardSummary cardDetails={ customer.card }/> }
                </Columns>

                <TransactionsSummary />
            </Main>
        </>
    );
};

export default App;
