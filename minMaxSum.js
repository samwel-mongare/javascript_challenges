// Challenge link: https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

// Given five positive integers, find the minimum and maximum
//  values that can be calculated by summing exactly four of the 
//  five integers. Then print the respective minimum and maximum 
// values as a single line of two space-separated long integers. 


function miniMaxSum(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  let maxSum = 0
  let minSum = 0
  
  for (let i=0; i < arr.length; i++){
      if (i > 0 ) {
          maxSum += arr[i]
      } 
  }
  for (let i=0; i < arr.length; i++){
      if (i < 4 ) {
          minSum += arr[i]
      }
  }
  
  console.log(minSum, maxSum)
}
