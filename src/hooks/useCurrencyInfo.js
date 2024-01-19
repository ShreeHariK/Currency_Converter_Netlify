import React, { useEffect, useState } from 'react'

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
                const data = await response.json();
                console.log(data[currency])
                setData(data[currency])
            } catch (err) {
                console.log(err)
            }
        }
        fetchCurrency();
    }, [currency])
    return data;
}

export default useCurrencyInfo