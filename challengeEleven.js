"use strict";
// Call two arms equally strong if the heaviest weights they each are able to lift are equal.
// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
function equallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    // if (yourLeft + yourRight === friendsLeft + friendsRight) {
    //   return true
    // } else {
    //   return false
    // }
    // if (yourLeft === friendsLeft) {
    //   return true
    // }
    // ! Another solution
    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    const friendsWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;
    return yourWeakest === friendsWeakest && yourStrongest === friendsStrongest;
}
console.log(equallyStrong(10, 15, 15, 10));
console.log(equallyStrong(15, 10, 15, 10));
console.log(equallyStrong(15, 10, 15, 9));
