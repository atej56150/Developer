import Profile from "./Profile"

function Dashboard({ userApp, eMailApp }) {
  return (
    <div>
      <h2>Dashboard - PropDrilling</h2>
      <Profile 
        userDashboard={userApp} 
        eMailDashboard={eMailApp} 
      />
    </div>
  );
}

export default Dashboard;
