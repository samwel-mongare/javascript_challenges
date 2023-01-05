/*  https://www.hackerrank.com/challenges/the-birthday-bar/problem
The birthday bar problem exploits the understanding of loops and how to loop
through an array while suming up the components
I believe that there is an optimized solution for this problem using a sorting
algorithm but for now, here is a solution with a big O of O(n2);
*/

function birthday(s, d, m) {
  // Write your code here
  let chocolatePieces = 0, sum = 0;
  for(let i = 0; i<= s.length - m; i++){
      sum = 0;
      for(let j = i; j < i+m; j++){
          sum += s[j];
      }
      if(sum == d){
          chocolatePieces++;
      }
  }
  return chocolatePieces;
}