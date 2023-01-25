/*
Link to the challenge: https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true
The hackerrank challenged requires us to find out if two kangaroos in the circus actually get to meet 
at a specific position during the show.
The approach I used in this challenge is I initialized two parameters to store the sum
of both numbers.
I then compared the total of both parameters in a while loop with the condition that the two numbers were not
the same.
To help with the runtime, I put an upper limit of 10 000 000 000;
I also added some conditional statements to handle the base case scenarios.
*/

function kangaroo(x1, v1, x2, v2) {
   let kang1 = x1;
   let kang2 = x2;
   if(x2 >= x1 && v2 >= v1 || x1 >= x2 && v1 >= v2 || v2 === 0 || v1 === 0) {
       return "NO";
   }
    
   while(kang1 !== kang2 && kang1 < 100000000) {
       kang1 = kang1 + v1;
       kang2 = kang2 + v2;
   }
   if(kang1 === kang2) {
       return "YES"
   }
   return "NO"

   /* >>>>>>>>>>>>>>>>>>>>>>>>>>>> Lesson learnt and research
   After solving the challenge. here are the weaknesses realized
   While running tests, I couldn't tell the exact upper limit to use and it
   kept changing with every test.
   The function though functional was not effective and had a very poor big O notation of n2
   To optimize my code and solution, I had to do more research and realized the use of 
   division and remainder % saves alot of time. Here is the revised version.
   */

  const count = (x2 - x1)/(v1 - v2)
  const soDu = (x2 -x1)% (v1-v2)
  if  ( count> 0 && soDu === 0)
  {
      return "YES"
  }else{
      return "NO"
  }
}
