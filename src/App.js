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
    grid-template-columns: 1fr 1fr auto;
    grid-gap: 1rem;
    justify-content: space-between;
`;

const App = () => {
    const [customer, setCustomer] = useState({});

    useEffect(() => {
        const getData = async () => setCustomer(await getCustomer());
        getData();
    }, []);

    return (
        <>
            <Header/>
            <Main>
                <Columns>
                    <AccountSummary />
                    <section>Payments</section>
                    <CardSummary />
                </Columns>

                <TransactionsSummary />
            </Main>
        </>
    );
};

export default App;
