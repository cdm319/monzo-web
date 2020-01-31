export const getCustomer = async () => {
    const response = await fetch(`http://api.reimaginebanking.com/customers?key=${process.env.REACT_APP_NESSIE_API_KEY}`);
    const data = await response.json();
    return data[0] || { first_name: 'Test' };
};

// export default { getCustomer };