// Array of Numbers

function MapArrayKey5() {
  const prices = [50000, 20000, 3000];

  return (
    <div>
      <h1>MapArrayKey5</h1>

      {prices.map((price, index) => (
        <p key={index}>Price: ₹{price}</p>
      ))}
    </div>
  );
}

export default MapArrayKey5;
