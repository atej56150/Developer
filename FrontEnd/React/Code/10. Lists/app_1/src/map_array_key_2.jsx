// Array of Numbers

const numbers = [10, 20, 30];



function MapArrayKey2() {  
  return (
    <div>
      <h1>MapArrayKey2</h1>

      {numbers.map((number) => {
        return <p key={number}>{number * 2}</p>;
      })}
    </div>
  );
}

export default MapArrayKey2;



/*

Each <p> starts on a new line.

Output :-
MapArrayKey2
20
40
60

*/



function MapArrayKey3() {
  return (
    <div>
      <h1>MapArrayKey3</h1>

      {numbers.map((number) => (
        <div key={number}>{number - 2}</div>
      ))}
    </div>
  );
}

export { MapArrayKey3 };



/*

Each <div> starts on a new line.

Output :-
MapArrayKey3
8
18
28

*/
