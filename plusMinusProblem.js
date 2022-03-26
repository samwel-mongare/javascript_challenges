// This is a solution to the hackerrank challenge in the link below

// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with

// places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to
// are acceptable.

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    // Initialize three variables to store values
    // First loop through the Array
    // sort the positive,negative and 0s
    // store them in initialized variables
    // divide the respective initialized variables inside a toFixed() method
    // Initialize the ratio variables
    // return results with six decimal places
    
   let positiveNumber = 0
   let negativeNumber = 0
   let zeroValues = 0
   let positiveratio = 0
   let negativeratio = 0
   let zeroRatio = 0
   
   for (let i = 0; i < arr.length; i++) {
       if (arr[i] > 0) {
           positiveNumber += 1
           positiveratio = positiveNumber/arr.length
       } else if (arr[i] < 0) {
           negativeNumber += 1
           negativeratio = negativeNumber/arr.length
       } else {
           zeroValues += 1
           zeroRatio = zeroValues/arr.length
       }
   }
   
   console.log(positiveratio.toFixed(6))
    console.log(negativeratio.toFixed(6))
    console.log(zeroRatio.toFixed(6))
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
