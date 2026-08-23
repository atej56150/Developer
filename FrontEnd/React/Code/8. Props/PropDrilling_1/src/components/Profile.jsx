import User from "./User"

function Profile({ userDashboard, eMailDashboard }) {
  return (
    <div>
      <h3>Profile - PropDrilling</h3>
      <User userProfile={userDashboard} eMailProfile={eMailDashboard} />
    </div>
  );
}

export default Profile;
