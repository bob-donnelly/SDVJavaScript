// Function that takes two numbers and a mathematical operator.

// Answer

function calFunc(num, operator, num2) {
operations = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '/': (a,b) => a / b
}
return operations[operator] (num, num2)
}

console.log(calFunc(4, '+', 3))
console.log(calFunc(4, '-', 3))
console.log(calFunc(4, '*', 3))
console.log(calFunc(4, '/', 3))

// Return the sum of an array.

function sumFunc(arr) {
    return arr.flat(Infinity).reduce((a,b) => a+b);
}

console.log(sumFunc([1,2,4,4,6,8,7, [3,4,5,6,7,8,8]]))

// const flatten = (arr) => {
// const result = [];

// arr.forEach(element => {
//     Array.isArray(element) ? result.push(...flatten(element)) : result.push(element)
// })
// }

// console.log(flatten([[1,2,3,4], [2,3,4,6], 2,3,4,5]))

const getDepth = obj => {
    let level = 1

    Object.keys(obj).forEach(key => {
        if(typeof obj[key] === 'object') {
            const depth = getDepth(obj[key] + 1,
                
                level = Math.max(depth, level)
                )
        }
    })
    return level
}

console.log(getDepth([]))

// function createDepth(arr) {
//     if(arr.length === 1) return arr
//     retun {arr[0], createDepth(arr).slice(1)}
// }

function flatArray(arr) {
    let result = [];
    if(arr === undefined) {
        return arr
    }
    arr.forEach(function (a) {
        if(Array.isArray(a)) {
            result = result.concat(flatArray(a))
        } else {
        if(typeof a === 'function') {
            result.push(a())  
        } else {
            result.push(a)
        }
        }
        return result
    })
}

console.log(flatArray())