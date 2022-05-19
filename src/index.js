import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.scss';

function App(){
  const[count, setCount] = useState(0);

  return(
    <div className="app">
      <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>{count}</h1>
      <div className="button__wrapper">
        <button className='negative' onClick={() => setCount(count-1)}>-</button>
        <button className='positive' onClick={() => setCount(count+1)}>+</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();