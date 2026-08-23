type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T3 = Exclude<Shape, { kind: "circle" }>;

let shape: T3;

shape = {
  kind: "square",
  x: 10
};                                                  // ✅

shape = {
  kind: "triangle",
  x: 10,
  y: 20
};                                                  // ✅

shape = {
  kind: "circle",
  radius: 10
};                                                  // ❌ Error
