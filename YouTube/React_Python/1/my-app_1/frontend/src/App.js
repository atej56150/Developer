import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch('http://13.222.169.187:5000/api/greet')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage("Error fetching data"));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;



{/*

  return (
    <div className="App">
      <h1>{message === "Loading..." ? "Loading from backend..." : message}</h1>
    </div>
  );

*/}



{/*

  return (
    <div className="App">
      {message === "Loading..." ? (
        <h1>🔄 Loading from backend...</h1>
      ) : (
        <h1>{message}</h1>
      )}
    </div>
  );


*/}
