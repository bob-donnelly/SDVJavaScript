// let rating = [0][0];

// for(let row = 0; row < rating.length; row++) {
//     for(let col = 0; col < rating[0].length; col++) {
//         console.log(col)
//     }
//     console.log(row)
// }

function exampleJavaScript(arr) {
	let newArr = [];
  for(let i = 0; i < arr.length; i++){
    let largest = arr[i][0];
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] > largest) {
        largest = arr[i][j]
      }
    }
    newArr.push(largest)
  }
  return newArr
}

console.log(exampleJavaScript([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])) 

