const g = "Hi"

function greet() {
    return g
}

console.log(greet())

// First function is declared then another function is declared calling the first function

function firstFunction(){
    console.log("Hello from firstFunction");
}function secondFunction(){
    firstFunction();
    console.log("The end from secondFunction");
}

   // Secondfunction is calling first function then printing its own value

   // Think of the stack from Magic the Gathering, last in first out.

secondFunction();

let myNumber = 23 // Adress = 12345678

myNumber = myNumber + 1 // Adress = 123456789

let newVar = myNumber // Adress = 123456789

 /* iF NewVar and myNumber = MyNumber were switched newVar will point at the original MyNumber's adress */


let myString = 'abc'

myString = myString + 'd'

// myString = abc would be assigned to a number say 5673840 for reference 

// myString = +d would be given a new adress incrementally e.g. 56738401 

console.log(myString)

console.log(myNumber, newVar)

/* Non-Primitive data types are mutable so data types are not stored in the address stores only the variable
   it compares the variable addresses  */

const numbers = []

numbers.push(0)
numbers.push(5)
numbers.push(4)
numbers.push(7)

console.log(numbers)

let min = 20

let max = 100

function randomNumber(){
    const r = Math.random()*(max - min) 
    return Math.floor(r)
}

console.log(randomNumber())   

for (var i = 0; i < 10; i++) {
    console.log(randomNumber(20 - 100))
}

let arr = [1, 2, 3, 4, 5]

console.log(arr.length)

// Creating objects

    const student = {
        name: 'Bob',
        year: 'one',
        class: 'sdv503'
    }

// console.log the name of the student with dot notation

    console.log(student.name)

// Reassigning the student name to matt

    student.name = 'Matt'

// Console.log now prints matt as the student name

    console.log(student)

    const newObj = {}

    const info = {
        fn: 'John',
        ln: 'Smith',
        dob: '1st Dec 2000',
        friends: ['Bob', 'Pat']
    }

// printing the friends array nested within the info object indexes start at 0 

    console.log(info.friends[0])

    const example = {
        nestedObj: {
            name: 'Alex'
        }
    }

    console.log(example)

// New object is unnecessary and takes memory try to avoid

    const Obj = new Object()

    // Because new object doesn't have any data it console logs as an empty {}

    console.log(Obj)

const propsName = 'firstName'

    const objOne = {
        [propsName.toUpperCase()]:'OLE'.toLowerCase()
    }

    console.log(objOne)

    const objTwo = {
        fn: 'Jeanne',
        ln: ' d\'Arc',
        printFullName() {
            return `${this.fn}${this.ln}`
        }
    }

// Bracket notation syntax as well as dot notation

    console.log(objTwo.printFullName())

    console.log(objTwo['fn'])



