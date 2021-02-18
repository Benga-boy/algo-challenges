// * Add two numbers together
function add(num1: number, num2: number): number {
  return num1 + num2
}

console.log(add(5, 5))

// * Add sums of  multiple given arguments together
function add2(...nums: number[]): number {
  return nums.reduce((acc, num) => acc + num)
}

console.log(add2(3, 4, 5, 6))
