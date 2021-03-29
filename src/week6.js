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

