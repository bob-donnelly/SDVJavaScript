function element_replace() {

    let arr = Array(0, 1, 1, 0,);

    // ele[ele.map((x, i) => [i, x]).filter(
    // x => x[1] == 1)[0][0]] = 'x'

    // ele[ele.map((x, i) => [i, x]).filter(
    //     x => x[1] == 1)[0][0]] = 'x'

    //     ele[ele.map((x, i) => [i, x]).filter(
    //         x => x[1] == 1)[0][0]] = 'x'

    // arr = ele.map(x =>  {

    //     return x.value = 'x'; 

    // })
    // arr = arr.flatMap( (n) =>
    // (n === 0) ? [] :
    // [n-1, 'x']) 

    arr = arr.flatMap( (n) =>
    // (n === 0) ? [] :
    [n=0, 'x', n=0, 'x']) 
    

console.log(arr)
}
;
element_replace()

function oneTox() {
    
}

// let board = []
// let row = []
// let random = (a) =>Math.floor(Math.random() *Math.floor(a)) // function to generate random number
// let bombNumber=random(4) +Math.floor(4) //chosing random number of bomb this is optional as the function below can add bomb without this variable
// let bombLocation= []

// for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
//         row.push(0)
//     }
//     board.push(row)
//     row = []
// }

// //generate bomb
// function bombGenerator(para = 5) {
//     let newBoard = [...board]
//         //adding para number of bomb to the board with row and column. The default is 5
//     for (let i = 0; i < para; i++) {
//         let row = random(4)
//         let column = random(4)
//         newBoard[row][column] = 1
//     }
//     return newBoard
// }

let arr = [  [0, 1, 0, 0],  [0, 0, 1, 0],  [0, 1, 0, 1],  [1, 1, 0, 0],];

arr = arr.flatMap( (n) =>

[n=0, 'x', n=0, 'x']

) 

console.log(arr)

function createDepth(arr) {
    if(arr.length === 1) return arr
    return [arr[0], createDepth(arr.slice(1))]
}

console.log(createDepth(arr))

// let myArr = [];
// myArr.push(arr)
// console.log(myArr)
// console.log(arr)

// let obj = Object.fromEntries(myArr);

// console.log(obj)

//  myArr = Object.entries(obj);

// console.log(myArr)