// Switch Statements galore

const person = '';

switch (person) {
  case 'Jane':
    console.log('Hi Jane');
    break;
  case 'John':
    console.log('Hi John');
    break;
  case 'Joe':
    console.log('Hi Joe');
    break;
  case 'Mary':
    console.log('Hi Mary');
    break;
  default:
    console.log('Hi');
    break;
}


// A switch statement to display the lunches during the week

const lunch = ''

switch (lunch) {
    case 'Sausages':
        console.log('Had Sausages')
        break;
        case 'Curry':
            console.log('Had curry')
            break;
            default: 'Food'
            console.log('Had food')
            break;

}

// A switch statement for grade outputs

let grades = ''

switch  (grades) {
    case '85':
        console.log('A+')
        break;
        case '80':
        console.log('A')
        break;
        case '75':
        console.log('A-')
        break;
        case '70':
        console.log('B+')
        break;
        case '65':
        console.log('B')
        break;
        case '60':
        console.log('B-')
        break;
        case '55':
        console.log('C+')
        break;
        case '50':
        console.log('C')
        break;
        default: 'Fail'
        console.log('YOU FAIL!')
        break;
}

const foo = -2;
switch (foo) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('I like this number');
    break;
  case -1:
  case -2:
    console.log('I love this number');
    break;
  default:
    console.log('I don\'t like this number.');
}

// Objects

let man = {
    name: 'tony',
    age: 20,
    driver: null
  };

  if (man.age >= 16) {
    man.driver = 'Yes';
  } else {
    man.driver = 'No';
  }

console.log(man.driver)

// Termery Operator takes dot notation of two object values and compares them with notation ? then do y : else do x 

man.driver = man.age >= 16 ? 'Yes' : 'No';

console.log(man.age)

let x = 5
let y = 5 > x ? 5 + 5 : x

console.log(y)

// Termery Operator to determine whether to charge a student discount or not

let isStudent = false
let ifSenior = true
let price = isStudent ? 8 : 12

console.log(price)

// let isStudent = false;
// let isSenior = true;let price = isStudent ? 8 : isSenior ? 6 : 10console.log(price);

// If else statement version of the Termery Operator above for comparison

if (isStudent) {
console.log(8)
} else if (ifSenior) {
    console.log(6)
} else {
    console.log(12)
}


