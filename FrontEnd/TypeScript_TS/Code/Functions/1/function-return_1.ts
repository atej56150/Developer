function calculateRectangleArea(lengthRectAngle: number, widthOfRectAngle: number): number {
  return lengthRectAngle * widthOfRectAngle;
}

const lengthRectAngle = 5;
const widthOfRectAngle = 3;

const area = calculateRectangleArea(lengthRectAngle, widthOfRectAngle);

console.log(`The area of the rectangle is: ${area}`);
