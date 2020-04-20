import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Counter from './components/Counter'
import Solution8 from './components/Solution8'
import Solution6 from './components/Solution6'


ReactDOM.render(
  <React.StrictMode>
     <u>Solution 6</u>
    <Solution6 />
    <hr/>
    <u>Solution 7</u>
    <Counter />
    <hr/>
    <u>Solution 8</u>
    <Solution8 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
