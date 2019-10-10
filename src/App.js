import React from 'react';
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="content">
            <h1>Welcome, &lt;name&gt;!</h1>

            <section className="grid-col-2">
                <section className="account-summary">
                    <h3>Account Summary</h3>
                </section>
                <section className="statement-summary">
                    <h3>Statement Summary</h3>
                </section>
            </section>

            <section className="transactions">
                <h3>Recent Transactions</h3>
            </section>
        </section>
      </main>
    </>
  );
}

export default App;
