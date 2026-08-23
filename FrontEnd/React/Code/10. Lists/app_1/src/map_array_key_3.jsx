// Array of Strings

function MapArrayKey4() {
  const names = ["Arun", "Rahul", "John"];

  return (
    <div>
      <h1>MapArrayKey4</h1>

      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
}

export default MapArrayKey4;
