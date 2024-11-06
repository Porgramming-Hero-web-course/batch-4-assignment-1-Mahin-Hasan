function removeDuplicates(nums: number[]): number[] {
  return nums.filter((num, idx) => nums.indexOf(num) === idx);
}
const res2 = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(res2);
