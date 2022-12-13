// The FizzBuzz challenge goes something like this. Write a function that does the following:

// console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
// logs fizz instead of the number for multiples of 3
// logs buzz instead of the number for multiples of 5
// logs fizzbuzz for numbers that are multiples of both 3 and 5

// The FizzBuzz challenge makes use of the modulo (%) operator which returns the remainder 
// after a division of the Number. A remainder of 0 indicates that the first number is a multiple of the second number:
// What you need to pay attention to in this challenge is the order of the if … else statements. Start with the double condition first (&&) 
// and end with the case where no multiples are found. This way, you’ll be able to cover all bases. 

const fizzbuzz = (n) => {
  for (let i = 1; i <= n; i++)
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }

  fizzbuzz(15)