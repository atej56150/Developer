function getData(callback) {
    setTimeout(() => {
        console.log("Data received");

        callback();
    }, 10000);
}

getData(() => {
    console.log("Process finished");
});



/*

1️⃣  getData() is called
         ↓
2️⃣  setTimeout starts  →  starts WAITING 10 seconds...
         ↓
    ⏳ 10 seconds pass...
         ↓
3️⃣  "Data received"  ← prints after 10 seconds
         ↓
4️⃣  callback() runs  ← which is the arrow function you passed
         ↓
5️⃣  "Process finished"  ← prints


What is the callback here ?
getData(() => {
    console.log("Process finished");
});

The arrow function is the callback.
// This arrow function
() => {
    console.log("Process finished");
}

// is going into this parameter
function getData(callback) { ... }

*/
