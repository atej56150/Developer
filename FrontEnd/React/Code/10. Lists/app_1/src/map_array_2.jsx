// Array of Numbers

function MapArray2() {
  const numbers = [10, 20, 30];
  return (
    <div>
      <h1>MapArray2</h1>
      {numbers.map((number) => {
        return <p>{number * 2}</p>;
      })}
    </div>
  );
}

export default MapArray2;



/*

Each <p> starts on a new line.

Output :-
MapArray2
20
40
60

*/



function MapArray3() {
  const numbers = [10, 20, 30];
  return (
    <div>
      <h1>MapArray3</h1>
      {numbers.map((number) => (
        <div>{number - 2}</div>
      ))}
    </div>
  );
}

export { MapArray3 };



/*

Each <div> starts on a new line.

Output :-
MapArray3
8
18
28

*/
