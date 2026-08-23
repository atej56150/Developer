function AND() {
  const isLoggedIn = true;
  var isLoggedOut = false;
  return (
    <div>
      <h1>AND(&&)_1</h1>

      {isLoggedIn && <button>LoggedIN</button>}
      {isLoggedIn && <p>You are logged in</p>}
      {isLoggedOut && <p>You are logged out</p>}

    </div>
  );
}

export default AND;
