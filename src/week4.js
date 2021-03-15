// REVIEW 

// values and variables

let country = "New Zealand"
let city = "Nelson"
let postcode = "7010"

console.log(country)
console.log(city)
console.log(postcode)

console.log(country + ' ' + city + ' ' + postcode)

// Datatypes

let isIsland = true

// Variable is declared but not initialised yet.

let language 

console.log(isIsland)
console.log(language)

// typeof is a reserved keyword that shows the datatype of the declared variable.

// reserved keywords are for javascript to parse differently to variables, you cannot use them.

console.log(typeof isIsland)

let number = 10 

console.log(number)

console.log(typeof number)

console.log(number / 2)

console.log(number > 6)

// If number divided by two is less than 10 and number is strictly equal to 10 return true if not false.

console.log(number / 2 < 10 && number === 10) 

const address = country + ' ' + city + ' ' + postcode

console.log(address)

// ES6 string syntax helps with calling data from a database.

let string = `My address is ${country}, ${city}, ${postcode}.`

console.log(string)

let x = 10

if (x < 0) {
    console.log('Bob')
} else {
    console.log(false)
}

// A function to determine if number variable is equal to 10.

function play() {
    if (number === 10) {
    return true;
} else {
    return false;
}
}

console.log(play())

if (typeof country === 'number') {
console.log('Is true')
} else {
    console.log('false')
}

// && is the and symbol

if (country === "New Zealand" && 'string') {
    console.log('Is true')
} else {
    console.log('false')
}

// || is the or symbol.

if (country === "New Zealand" || 'string') {
    console.log('Is true')
} else {
    console.log('false')
}

x = '1234567'

console.log(typeof x)

console.log(x)

let y = Number (x)

console.log(Number(y))

const a = 1 + 1

console.log(1+1)
console.log(a)

// MDN define properties in Objects. Changed to null.

const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: null,
    writable: true
  },
  property2: {}
});

// Console.log() needs the object and property with dot notation to print the value.

console.log(object1.property1)

Symbol('Hello, World!')

console.log(Symbol('Hello, World!'))

// Objects with syntax like a switch statements.

const obj = {
    student: 'Bob',
    country: 'Aotearoa',
    city: 'ChCh',
    postcode: 8083
}

console.log(obj)