"use strict";
// * Given a string, replace each of its characters by the next one in the English alphabet (z would be replaced by a)
function alphabetShift(str) {
    const newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
        if (char === 'z') {
            return 'a';
        }
        else {
            return String.fromCharCode(char.charCodeAt(0) + 1);
        }
    });
    return newStr;
}
console.log(alphabetShift('crazy'));
