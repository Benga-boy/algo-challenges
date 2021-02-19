"use strict";
// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.
function alternatingSums(nums) {
    let even = 0;
    let odd = 0;
    // * Check if the index % 2 === 0 to get the odds and even index
    nums.forEach((num, i) => {
        console.log(i % 2);
        if (i % 2 === 0) {
            even += num;
        }
        else {
            odd += num;
        }
    });
    return [even, odd];
}
console.log(alternatingSums([50, 60, 60, 45, 70]));
