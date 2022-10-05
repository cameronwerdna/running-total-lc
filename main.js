//function takes an array of numbers and returns an array of running total (n1 + (n1+n2) + (n1+n2+n3) etc.)
var runningTotal = function(nums) {
    let newArr = []
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            newArr.push(nums[i])
        } else {
            newArr.push(nums[i] + newArr[i-1])
        }
    }
    return newArr
}

console.log(runningTotal([1,2,3,4])) // => [1,3,6,10]
console.log(runningTotal([11,22,33,44])) // => [11,33,66,110]
console.log(runningTotal([5,17,3,14])) // => [5,22,25,39]