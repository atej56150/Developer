import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

import Welcome3, { Welcome4 } from './function_2';                                    // Welcome3 (default), Welcome4 (named)
//import { Welcome7 } from './App.js'
import App, { Welcome7 } from './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Welcome4></Welcome4>
    <App />
    <Welcome3 />
    <hr ></hr>
    <Welcome7> </Welcome7>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
