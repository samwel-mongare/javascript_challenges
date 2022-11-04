// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

// The apple and oranges challenge is a beginner level challenge that basically
// wanted a calculation of how many apples and oranges fall onto Sam's house from the 
// respective trees. I solved the challenge using arrays and the for loop
// JavaScript method. Lesson learnt after research is that an optimized 
// solution would have been using the map function which produces more DRY code.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  // initialize results storage units.
  const appleDistance = [];
  const orangeDistance = [];
  let totalApples = 0;
  let totalOranges = 0;
  // There are two arrays. The apples and oranges array.
  // We have to add the individual apple array elements to a
  for(let d of apples) {
      appleDistance.push(d + a);
  }
  // and individual oranges array elements to b
  for(let d of oranges) {
      orangeDistance.push(d + b)
  }
  // Finally compare sum of both arrays to s and t
  for(let tApples of appleDistance) {
      if(tApples >= s && tApples <= t) {
          totalApples++;
      }
  }
  for(let tOranges of orangeDistance) {
      if(tOranges >= s && tOranges <= t) {
          totalOranges++;
      }
  }
  console.log(`${totalApples}\n${totalOranges}`)
}
