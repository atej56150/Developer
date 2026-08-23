function crashApp(): never {
  throw new Error("App crashed!");
}

console.log("Before crash");

crashApp();

console.log("After crash");



// Before crash
// Error: App crashed!