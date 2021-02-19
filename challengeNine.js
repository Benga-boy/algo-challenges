"use strict";
// * Check whether the given string in a subsequence of the plaintext alphabet
function alphabetSequence(str) {
    const chars = str.split('');
    const charVals = chars.map((char) => char.charCodeAt(0));
    // * If the length of the array after removing duplicates is not equal to the actual length of the array then return false as we have duplicates
    if (new Set(charVals).size !== charVals.length) {
        return false;
    }
    // * Use case for checking 'z'
    for (let i = 0; i < charVals.length - 1; i++) {
        if (charVals[i] >= charVals[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log(alphabetSequence('abz'));
console.log(alphabetSequence('effg'));
console.log(alphabetSequence('cdce'));
