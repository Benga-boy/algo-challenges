"use strict";
// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
// Given two arrays a and b, check whether they are similar.
function areSimilar(a, b) {
    // * Sort the arrays
    const arr1 = a.sort((x, y) => x - y);
    const arr2 = b.sort((x, y) => x - y);
    // * Check if every number in array a can be swapped with array b
    return arr1.every((num, i) => {
        return arr1[i] === arr2[i];
    });
}
console.log(areSimilar([1, 2, 3], [1, 2, 3])); // true
console.log(areSimilar([1, 2, 3], [2, 1, 3])); // true
console.log(areSimilar([1, 2, 2], [2, 1, 1])); // false
