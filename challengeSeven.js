"use strict";
// * 
function almostIncreasingSequence(sequence) {
    let count = 0;
    sequence.forEach((num, i) => num <= sequence[i - 1] ? count++ : num <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1] ? false : count);
    return count <= 1;
}
// function removeK(nums: number[], k: number): number[] {
//   return nums.filter((num: number, i: number) => (i + 1) % k !== 0)
// }
// console.log(removeK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
