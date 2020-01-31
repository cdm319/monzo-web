import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {getCustomer} from './api';
import Header from './components/Header';

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
                    <section className="account-summary">
                        <h3>Account Summary</h3>
                    </section>
                    <section className="statement-summary">
                        <h3>Statement Summary</h3>
                    </section>
                </Columns>

                <section className="transactions">
                    <h3>Recent Transactions</h3>
                </section>
            </Main>
        </>
    );
};

export default App;
