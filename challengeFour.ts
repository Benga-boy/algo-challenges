// * Add 2 digits together

function addTwoDigits(num: number): number {
  const numToString = num.toString().split('')

  return parseInt(numToString[0]) + parseInt(numToString[1])
}

console.log(addTwoDigits(29))