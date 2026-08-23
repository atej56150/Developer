function Header() {
  return <h1>My Website</h1>;
}

function Product() {
  return <p>Laptop - $1000</p>;
}

function Footer() {
  return <p>Copyright 2026</p>;
}

function App() {
  return (
    <>
      <Header />
      <Product />
      <Footer />
    </>
  );
}

export default App;
