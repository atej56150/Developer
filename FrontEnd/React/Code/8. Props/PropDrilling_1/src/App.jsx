import Dashboard from "./components/Dashboard"

function App() {
  const userName = "aruntheja";
  let eMailID = "aruntheja@gmail.com"

  return (
    <div>
      <h1>App - PropDrilling</h1>
      <Dashboard userApp={userName} eMailApp={eMailID} />
    </div>
  );
}

export default App
