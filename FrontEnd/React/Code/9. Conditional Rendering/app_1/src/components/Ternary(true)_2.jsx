function TernaryTrue2() {
  const isLoggedIn = true;

  return (
    <header>
      <h1>Ternary(true)_2</h1>

      {isLoggedIn ? (
        <button>Logout</button>
      ) : (
        <button>Login</button>
      )}
    </header>
  );
}

export default TernaryTrue2;
