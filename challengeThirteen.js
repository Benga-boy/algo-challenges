"use strict";
// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
function arrayChange(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= arr[i + 1]) {
            const diff = (arr[i] + 1) - arr[i + 1];
            arr[i + 1] = arr[i] + 1;
            count += diff;
        }
    }
    return count;
}
console.log(arrayChange([1, 1, 1]));
