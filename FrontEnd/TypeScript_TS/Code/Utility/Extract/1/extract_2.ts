type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
 
type T2 = Extract<Shape, { kind: "circle" }>

let shape: T2;

shape = {
  kind: "circle",
  radius: 10
};                                      // ✅

shape = {
  kind: "square",
  x: 10
};                                      // ❌ Error

shape = {
  kind: "triangle",
  x: 10,
  y: 20
};                                      // ❌ Error
