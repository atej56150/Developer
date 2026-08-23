function calculateRectangleAreas(
  len: number,
  wid: number
): void {
  const area = len * wid;
  console.log(`The area of the rectangle is: ${area}`);
}

const len = 5;
const wid = 3;

calculateRectangleAreas(len, wid);