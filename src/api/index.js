const stubData = {
    first_name: 'Test',
    last_name: 'User',
    card: {
        cardNumber: '4242424242424441',
        cardExpiry: '12/20',
        cardName: 'Dr Test User'
    },
    account: {
        creditLimit: 5000,
        balance: 1243.26
    }
};

export const getCustomer = async () => {
    // const response = await fetch(`http://api.reimaginebanking.com/customers?key=${process.env.REACT_APP_NESSIE_API_KEY}`);
    // const data = await response.json();
    return stubData;
};

// export default { getCustomer };