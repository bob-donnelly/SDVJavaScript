function element_replace() {

    let arr = [0, 1, 1, 0,];

    // ele[ele.map((x, i) => [i, x]).filter(
    // x => x[1] == 1)[0][0]] = 'x'

    // ele[ele.map((x, i) => [i, x]).filter(
    //     x => x[1] == 1)[0][0]] = 'x'

        // arr[arr.map((x, i) => [i, x]).filter(
        //     x => x[1] == 1)[0][0]] = 'x'

        arr.map(arr => [0, 1]).filter(arr => arr[1] == 1)[1][2] = 'x';
        console.log(arr)

    // arr = ele.map(x =>  {

    //     return x.value = 'x'; 

    // })
    // arr = arr.flatMap( (n) =>
    // (n === 0) ? [] :
    // [n-1, 'x']) 

    // arr = arr.flatMap( (n) =>
    // // (n === 0) ? [] :
    // [n=0, 'x', n=0, 'x']) 
    console.log(arr)
}

let arr = [  [0, 1, 0, 0],  [0, 0, 1, 0],  [0, 1, 0, 1],  [1, 1, 0, 0],];

arr.map(arr => [0, 1]).filter(arr => arr[1] == 1)[1][2] = 'x'

console.log(arr)

arr = arr.flatMap( (x) =>

[x=0, 'x']

) 


console.log(arr)

for(x = 0; x < arr.length; x ++) {

    console.log(arr[x])
    }

console.log(arr)

// function loop(arr) {
    
//     arr = arr.flatMap( (n) =>
    
//     [n=0, 'x', n=0, 'x']
    
//     ) 
//     console.log(arr)
    
// }


arr = arr.flatMap( (x) =>

[[x=0, 'x', x=0, x=0], [x=0, x=0, 'x', x=0],]

) 

console.log(arr)


// function createDepth() {
//     if(arr.length === 1) return arr
//     return [arr[0], createDepth(arr.slice(1))]
// }

// console.log(createDepth([1,2,3,5,6]))

// let myArr = [];
// myArr.push(arr)
// console.log(myArr)
// console.log(arr)

// let obj = Object.fromEntries(myArr);

// console.log(obj)

//  myArr = Object.entries(obj);

// console.log(myArr)

