import React, { useId } from 'react'

const InputBox = (
    { label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyList = [],
        selectedCurrency = 'usd',
        amountDisabled = false,
        currencyDisabled = false,
        className = ''
    }
) => {
    const id = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2'>
                <label htmlFor={id}
                    className='text-black/40 mb-2
                    inline-block'>
                    {label}
                </label>
                <input
                    id={id}
                    type='number'
                    className='w-full outline-none bg-transparent py-1.5'
                    placeholder='Amount'
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
            </div>
            <div className='w-1/2 flex flex-col flex-wrap items-end justify-end'>
                <label
                    className='text-black/40 mb-2
                    inline-block'>
                    Currency Type
                </label>
                <select
                    className='outline-none cursor-pointer rounded-lg bg-gray-100 px-1 py-1'
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}>
                    {currencyList.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox