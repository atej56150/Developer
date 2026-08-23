function Dashboard() {
  const isLoggedIn = true;
  const isLoading = false;
  const isAdmin = true;
  const hasNotifications = true;

  // Early Return
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // if (the key is to understand the ! (NOT) operator)
  // if (!isLoggedIn = !true then !true === false and it become if (false) {...})
  if (!isLoggedIn) {
    return <h2>Please Login...!</h2>;
  }

  return (
    <div>
      <h1>If && Ternary EarlyReturn</h1>

      {/* Ternary */}
      {isAdmin ? (
        <h2>Admin User</h2>
      ) : (
        <h2>Normal User</h2>
      )}

      {/* && */}
      {hasNotifications && (
        <p>You have new notifications 🔔</p>
      )}
    </div>
  );
}

export default Dashboard;
