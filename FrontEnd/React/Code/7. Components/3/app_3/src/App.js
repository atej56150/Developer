import logo from './logo.svg';
import './App.css';


import Welcome0, { Welcome1, Welcome2 } from './function_1';
import { Welcome5, Welcome6 } from './function_2.js';

// The below code is commented with "{/* */}"
{/*


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


*/}


export default function App() {
  return (
    <div className="App">
    
    <Welcome5> </Welcome5>
    <hr />
    <Welcome0 />
    <Welcome2></Welcome2>
    <Welcome1 />
    <hr></hr>
    <Welcome6> </Welcome6>
    <hr />
    <Welcome7 />
    </div>
  );
}


export function Welcome7() {
  return <h2><b><u> 7...7...7 </u></b></h2>;
}

