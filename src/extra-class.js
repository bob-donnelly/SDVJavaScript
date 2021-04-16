for(let i = 0; i <= 10; i++) {
    console.log('Bob')
}

for(let a = 15; a > 2; a--) {
    console.log([a])
}

for(let b = 0; b < 15; b++) {
    console.log([b])
}

for(let c = 80; c <= 100; c++) {
console.log(c)
}

let arr = [2, 4, 4, 5, 6, 7, 8]

console.log(arr[5])

// function indexSearch(arr, num) {
// for(let i = 0; i < arr.length; i++) {
// if(arr[i] === num) {
// return i 
// }
// }
// return 'Number does not exist.'
// }

function indexSearch(arr, num) {
    return arr.indexOf(num) 
}


indexSearch([1,2,3,4,5,6], 3)

// Index search only returns the first index if there are multiple of the same value in the array.
// Returns undefined if there is no corresponding value.

console.log(indexSearch([1,3,3,4,5,6,7,8,9,10], 3))

console.log(arr.length)

function sumOfCubs(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i] * arr[i]
    }
    return sum
}

sumOfCubs([6])

console.log(sumOfCubs([6]))

// Check nested arrays, indexOf and for loops/skipping steps for minesweeper.


