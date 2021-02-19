"use strict";
// * Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array
function almostIncreasingSequence(sequence) {
    let count = 0;
    // * Is the next number equal to or less than the previous number? count ++ and check if the number after the next is equals to or less than the previous 2 numbers. Then just return false
    sequence.forEach((num, i) => num <= sequence[i - 1] ? count++ : num <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1] ? false : count);
    return count <= 1;
}
console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
