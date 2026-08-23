import logo from './logo.svg';
import './App.css';


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


function App() {
  return (
    <div>                                                           
      <h1>Welcome to React - <b><u>Function_1</u></b></h1>

      <div className="App">
        <h2>Welcome to React - <b><u>1<sup>st</sup></u></b></h2>

      </div>
      
      <div className="App">                                        
        <h2>Welcome to React - <b><u>2<sup>nd</sup></u></b></h2>    

      </div>

    </div>
  );
}



function App() {
  return (
    <>                                                                          {/* ← Fragment (no extra DOM node) */}
      <h1>Welcome to React - <b><u>Function_2</u></b></h1>
      
      <div className="App">
        <h2>Welcome to React - <b><u>3<sup>rd</sup></u></b></h2>

      </div>
      
      <div className="App">
        <h2>Welcome to React - <b><u>4<sup>th</sup></u></b></h2>

      </div>

    </>
  );
}
