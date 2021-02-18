"use strict";
// * Return the largest strings in an array
function allLongestStrings(strs) {
    // * Find the largest string length
    const largest = Math.max(...strs.map(str => str.length));
    return strs.filter(str => str.length === largest);
}
console.log(allLongestStrings(["cc", "aba", "aa", "vcd", "aba"]));
