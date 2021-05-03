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

// let secFunc = (n, l) => 

function sortFunc(arr, str) {
    switch(str) {
    case 'Ascending':
    return arr.sort((a, b) => a - b)
    break;
    case 'Descending':
    return arr.sort((a, b) => b - a)
    break;
    default: return []
    }
    
}

console.log(sortFunc())

// const es6Sort = (arr, str) => []
// str === 'Ascending' ? arr.sort((a, b) => a - b) :
// str === 'Descending' ? arr.sort((a, b) => b - a) :
// arr

// console.log(es6Sort()) Didn't work

const trueOrFalse = (...args) => args.every(Boolean)

console.log(trueOrFalse(2, 2, 2, 2, 2, 0))

// function tOrf() {
//     if(typeof 'number' || 'string') {
//         return true
//     }
//     else if ('number' === 0 || NaN) {
//         return false
//     }
// }


// console.log(tOrf())

function subArr(x, y, z) {
    return Array(x).fill(Array(y).fill(z))
    }

    console.log(subArr(4,4,1))

    // function subArrs(x,y,z) {
    // let arr = [];
    // arr.push()
    // }

    function checkArrays(arr1, arr2) {
        for(let i = 0;i < arr1.length;i++) {
            if (arr1[i] === arr2[i]) {
                return true
            } else {
                return false
            }
        }
    }
     
    console.log(checkArrays([1,3],[6,3,8,1]))
    console.log(checkArrays([1], [1]))