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

let arr1 = []

arr1.push([2,3,3,3]) 

console.log(arr1)
console.log(arr1.indexOf(3))

let arr2 = []

arr2.push([0,0,1,0],
    [0,1,0,0],
    [0,0,0,1],
    [1,0,0,0])

    console.log(arr2)
console.log(arr2.indexOf(1 ));

let obj = {
    firstname : 'bob',
    lastname : 'WD'

}

console.log(obj.firstname, obj.lastname)

console.log(obj.firstname = 'Georges')

obj.month = 'Dec'

console.log(obj.month)

delete obj.firstname 

console.log(obj.firstname, obj.lastname, obj.month)

const myObj = new Object();
myObj.fn = 'Bob'; 
myObj.ln = 'WD';
myObj.mth = 'Dec';
myObj.dl = 'Full';
myObj.add = 'Private'

console.log(myObj)



console.log('fn' in myObj, 'add' in myObj, 'month' in myObj)

// console.log(mth in myObj)


const allProps = Object.keys(obj);
// for (allProps) {
//     const value = obj[firstname, lastname];
//     console.log(allProps, value)
// }

console.log(allProps)

const allEntries = Object.entries(obj);

console.log(allEntries)

// const obj1 = {
// name: 'Alex',
// object1:  {
// address: 'Earth'
// }
// }

// const obj2 = {
//     ...obj1
// }

// console.log(obj2)

//Nested arrays.

// ([
//     [1,2,3,4,5],
//     [5,6,7,8,9],
//     [20,21,34,56,100]
// ])

// const myArr = [0,1,2,3,4,5,6,7]

function sumMin(arr) {
let sum = 0;

for(let i = 0; i < arr.length; i++) {
    let y = arr[i][0]
    for(let x = 0; x < arr[i].length; x++) {
        if(y < arr[i][x]) {
            y = arr[i][x]
        }
    }
    sum += y 
}
return sum

}

// function sumMin(arr) {
//     let sum = 0;
    
//     for(let i = 0; i < arr.length; i++) {
//         let y = arr[i][0]
//         for(let x = 0; x < arr[i].length; x++) {
//             if(y < arr[i][x]) {
//                 y = arr[i][x]
//             }
//         }
//         sum += y 
//     }
//     return sum
    
//     }

console.log(sumMin([
    [1,2,3,4,5],
    [5,6,7,8,9],
    [20,21,34,56,100]
]))