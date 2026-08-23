function Header() {
  return <h1>My React App</h1>;
}

function User() {
  return (
    <div>
      <h2>Arun</h2>
      <p>React Developer</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <User />
    </div>
  );
}

export default App;
