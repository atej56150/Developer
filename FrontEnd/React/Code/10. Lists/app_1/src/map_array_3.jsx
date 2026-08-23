// Array of Numbers

const numbers = [10, 20, 30];



function MapArray4() {
  return (
    <div>
      <h1>MapArray4</h1> 
      {numbers.map((number) => (
        <span>{number + 2} </span>
      ))}
    </div>
  );
}

export default MapArray4;



/*

<span> stays in the same line.

Output :-
MapArray3
12 22 32

*/



function MapArray5() {
  return (
    <div>
      <h1>MapArray5</h1> 
      {numbers.map((number) => (
        <h7>{number} </h7>
      ))}
    </div>
  );
}

export { MapArray5 };



/*

Output :-
MapArray5
10 20 30

*/
