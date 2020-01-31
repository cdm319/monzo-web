import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import AccountSummary from './components/AccountSummary';
import CardSummary from "./components/CardSummary";
import {getCustomer} from './api';

const Main = styled.section`
    margin: 4rem auto;
    padding: 1rem;
    width: 80%;
    background-color: #fff;
`;

const Columns = styled.section`
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
                <h1>Welcome, {customer.first_name}!</h1>

                <Columns>
                    <AccountSummary />
                    <CardSummary />
                </Columns>

                <section className="transactions">
                    <h3>Recent Transactions</h3>
                </section>
            </Main>
        </>
    );
};

export default App;
