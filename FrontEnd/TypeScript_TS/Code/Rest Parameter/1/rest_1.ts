function addAll(...nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}

console.log(addAll(10, 20, 30, 100, 10.5, +true));              // Output: 171.5


// +true → 1
// +false → 0

// addAll(10, 20, 30, 100, 10.5, +true)
//                                  ↑
//                              becomes 1

// addAll(10, 20, 30, 100, 10.5, 1)
