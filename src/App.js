import { useState } from 'react';
import './App.css';
import InputBox from './Components/InputBox';
import money from './money.jpg'
import useCurrencyInfo from './hooks/useCurrencyInfo';
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(${money})` }}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-600 rounded-md p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault();
          }}>
            <div className='w-full mb-1'>
              <InputBox
                label='From'
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyList={options}
                selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 px-2 py-0.5'
                onClick={swap}>swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
                label='To'
                amount={convertedAmount}
                onAmountChange={(amount) => setConvertedAmount(amount)}
                onCurrencyChange={(currency) => setTo(currency)}
                currencyList={options}
                selectedCurrency={to}
                amountDisabled={true}
              />
            </div>
            <button type='button'
              onClick={convert}
              className='w-full rounded-lg text-white bg-blue-600 px-4 py-3'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
