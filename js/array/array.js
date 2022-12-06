// let arrayofNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11]
// let  max = 0;
   

// for(let i = 0; i < arrayofNumbers.length; i++) {
//     if (max < arrayofNumbers[i]) {
//         max = arrayofNumbers[i];
//     }
// }
// console.log(`max utga n: ${max}`)



// // let arrayofNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
// let min = 43;
// for (let i = 0; i < arrayofNumbers.length; i++) {
//     if (min > arrayofNumbers[i]) {
//         min = arrayofNumbers[i];
//     }

// }
// console.log(`min utga n; ${min}`);
// let x=[[1,2,3],[4,5,6],[7,8,9]]
// for(let i=0; i<x.length; i++){
//     for(let j=0; j<x[0].length; j++){
//     console.log(x[i][j]);
//     }
//     }
// let now = new Date.getMonth ();
// console.log(now);
        // /*
        //  Function that takes number of rows as input. 
        //  Output is a 2D array with the values.\\
       
// let itCompanies = [Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon];
// console.log(itCompanies);



// PASCAL TRIANGLE
// var numRows = 10,
// triangle, 
// start, 
// stop;

// // N is the no. of rows/tiers 
// // a is the 2-D array consisting of the row content

// function pascalRecursive(n, a) {

// if (n < 2) return a; 

// var prevRow = a[a.length-1];
// var curRow = [1];

// for (var i = 1; i < prevRow.length; i++) {
// curRow[i] = prevRow[i] + prevRow[i-1];
// }
// curRow.push(1);
// a.push(curRow);

// return pascalRecursive(n-1, a); // Call the function recursively
// }


// var triangle = pascalRecursive(numRows, [[1]]);

// for(var i = 0; i < triangle.length; i++)
// console.log(triangle[i]+"\n");
//     Let me know in the comment