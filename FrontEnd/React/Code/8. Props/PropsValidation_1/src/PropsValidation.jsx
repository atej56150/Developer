import PropTypes from "prop-types";

function User({ name, age, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  role: PropTypes.string,
};

export default User;



// to install the package : npm install prop-types
