function sumArray(nums: number[]): number {
  return nums.reduce((acc, curr) => curr + acc, 0);
}

const res = sumArray([1, 2, 3, 4, 5]);
console.log(res);
