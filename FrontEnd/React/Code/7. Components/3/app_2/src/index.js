import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Welcome1 from './function1'
import { Welcome2, Welcome3, Welcome4 } from './function1.js';
import TestCls from './class2.js'
import { SubjectsCls } from './class3';
import { Calls } from './COMPONENTS/calls.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SubjectsCls> </SubjectsCls>
    <hr></hr>
    <Welcome2></Welcome2>
    <Welcome3 />
    <App />
    <Welcome1 />
    <Welcome4></Welcome4>
    <hr />
    <TestCls> </TestCls>
    <hr></hr>
    <Calls />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
