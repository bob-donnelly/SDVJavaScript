// firstFun([1, 2, 3], [5, 5, 6], [8, 9, 10]) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

function firstFunc(...args) {
let result = [];
for( i = 0; i < (arguments.length); i++ ) {
result = result.concat(arguments[i])
}
return result
}

console.log(firstFunc(1,2,3,5,6,7))

//ES6

function es6 (...args) {
    return [].concat(...args)
}

console.log(es6([1,2,3,6,7]))

//Create a function takes two arguments that are numbers (number, length)

function secondFunc(number, length) {
    let result = [];
    for (let i = 1; i <= length; i++) {
        result.push(number * i)
    }
    return result
}

console.log(secondFunc(15, 7))