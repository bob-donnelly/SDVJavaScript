// Two argument function return them as an array

function newArr(a,b) {
let arrOne = [a,b]
return arrOne
}

console.log(typeof newArr())
console.log(newArr(1,2))

let newArr1 = (a,b) => [a,b]
console.log(newArr1(1,2))

console.log(typeof newArr1())

let newArr2 = (...b) => b
console.log(newArr2())
console.log(newArr(22,25))

let newArr3 = (...c) => c.length
console.log(newArr3(1,2,3,4,5,6,7,8,23,46,676,799,800909,98997799997))

let newArr4 = (...d) => [] 
console.log(newArr4())

let arrTwo = ['ali', 4, 5,6,7,8,9,11]
console.log(arrTwo[4], arrTwo[5])

// Array of numbers 

//ES6 style

function oddOrEven1(x) {
    let sum = 0;

    x.forEach(num => sum += num)
return sum%2 === 0 ? 'even' : 'odd'

}

console.log(oddOrEven1([23 * 7])) 

// const oddOrEven2 = (x) => {x.forEach(num => sum += num) return sum%2 === 0 ? 'even' : 'odd'}

// console.log(oddOrEven2())

//ES5 style

function oddOrEven2(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++)
    sum += x[i]
    if (sum%2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}

console.log(oddOrEven2([81]))

// ES6 function

const oddOrEven3 = arr => arr.reduce((x, y) => x + y, 0) %2 !== 0 ? 'odd' : 'even'



console.log(oddOrEven3([34]))

// function stringToNumber(arr) {
// return arr.map(x => Number(x));
// }

// console.log(stringToNumber(['4.3', '9.6']))

// Lines 68 - 70 reduced to one line

const stringToNumber1 = (arr) => arr.map(x => Number(x)); console.log(stringToNumber1(['4.3', '9.6']))

// Function to push a whole number to an empty array.

function stringToNumber2 (arr) {
    newArr = [];
    arr.forEach((x) => {newArr.push(parseInt(x))}) 
    return newArr
}

console.log(stringToNumber2(['4.3', '9.6']))

// const stringtoNumber4 = (newArr = []) => newArr.push(x => Number(parseInt(x))
// console.log(stringtoNumber4(['4.3', '9.6']))

function arrayToString(arr) {
let text = '' 
for (let i = 0; i < arr.length; i++) {
    text += arr[1] 
}
return text
}

let example = arrayToString([1 ,2 ,3 ,4 ,5 ,6 ,7])

console.log(example)
console.log(typeof example)

function arrayToString1(arr) {
return arr.join('');
}

console.log(arrayToString1([1, 2, 3])) 

console.log(typeof arrayToString1([1,2,3]))

// One line of line 105 - 107

const arrayToString2 = arr => arr.join('')

console.log(arrayToString2([1,2,4]))

// String to reversed array

// function reversi(x) {
//     let arr = x.split('')

//     let newArr = arr.reverse('')

//     let joinNewArr = newArr.join('')


//     return joinNewArr
// }

// console.log(reversi('bob'))

// const reversi = (x) => x.length < 2 ? str.reverse(str.slice(1, str.length)) + str[0];

// console.log(reversi('hello'))

const oddOrEven4 = arr => arr.reduce((x, y) => x + y, 0) %2 !== 0 ? arr.reduce((x,y) => x + y, 0)  : 'error'

console.log(oddOrEven4([6+3]))

