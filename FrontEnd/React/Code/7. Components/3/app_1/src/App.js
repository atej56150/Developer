import Welcome from './welcome.js'
import Welcome1, { Welcome2 } from './function1.js'
import { Welcome3, Welcome4 } from './function1.js';
import Welcome5, { Welcome6 } from './function2.js';
import Sample from './class1.js'
import './App.css';

function App() {
  return (

    <div className="App">
      <h1>Welcome to React</h1>
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome1 />
      <hr></hr>
      <Sample />
      <Welcome2 />
      <Welcome3 />
      <Welcome4 />
      <Welcome5 />
      <Welcome6 />
      <hr />
      <Sample></Sample>
    </div>

  );
}

export default App;
