"use strict";
// * Add 2 digits together
function addTwoDigits(num) {
    const numToString = num.toString().split('');
    return parseInt(numToString[0]) + parseInt(numToString[1]);
}
console.log(addTwoDigits(29));
