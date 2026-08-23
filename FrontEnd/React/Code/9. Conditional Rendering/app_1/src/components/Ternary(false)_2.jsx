function TernaryFalse2() {
  const isLoggedIn = false;

  return (
    <header>
      <h1>Ternary(false)_2</h1>

      {isLoggedIn ? (
        <button>Logout</button>
      ) : (
        <button>Login</button>
      )}
    </header>
  );
}

export default TernaryFalse2;
