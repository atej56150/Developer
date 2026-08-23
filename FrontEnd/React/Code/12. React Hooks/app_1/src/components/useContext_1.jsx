// Without useContext (Prop Drilling)

function useContext1() {
  const userName = "Arun";

  return (
    <div>
      <h1>Without useContext (Prop Drilling)</h1>
      <Dashboard userName={userName} />
    </div>
  );
}

function Dashboard({ userName }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <Profile userName={userName} />
    </div>
  );
}

function Profile({ userName }) {
  return (
    <div>
      <h3>Profile</h3>
      <User userName={userName} />
    </div>
  );
}

function User({ userName }) {
  return <h4>User ➔ Hello {userName}</h4>;
}

export default useContext1;
