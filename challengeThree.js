"use strict";
// Add a borderwall around the strings
function addBorder(str) {
    // * Creat instance of 5 stars
    const wall = '*'.repeat(str[0].length + 2);
    str.unshift(wall);
    str.push(wall);
    return str.map(item => '*'.concat(item, '*'));
}
console.log(addBorder(['abc', 'xyz']));
