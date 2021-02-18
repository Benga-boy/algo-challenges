"use strict";
// * Given an array of intergers, find the pair of adjacent elements that has the largest product and return the product
function adjacentElementsProduct(nums) {
    // let largestProduct = nums[0] * nums[1]
    // for (let i = 1; i < nums.length - 1; i++) {
    //   const product = nums[i] * nums[i + 1]
    //   largestProduct = largestProduct < product ? product : largestProduct
    // }
    // return largestProduct
    const result = nums.map((n, i) => n * nums[i + 1]).filter(num => Boolean(num) !== false);
    console.log(result);
    return Math.max(...result);
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
