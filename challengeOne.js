"use strict";
// * Find the median value
function absoluteSumValuesSumMinimization(num) {
    // Check if the array length is even. If it is, grab the number on the left.
    const isEven = num.length % 2 === 0;
    // If not even. Round the number down and grab the left index  also
    return isEven ? num[num.length / 2 - 1] : num[Math.floor(num.length / 2)];
}
console.log(absoluteSumValuesSumMinimization([2, 4, 7]));
console.log(absoluteSumValuesSumMinimization([2, 4, 6, 7]));
