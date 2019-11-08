// isPrime - Returns true or false, indicating whether the given number is prime.
// factorial - Returns a number that is the factorial of the given number.
// fib - Returns the nth Fibonacci number.
// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.

// reverse - Reverses the given string (yes, using the built in reverse function is cheating).
function myReverse(str) {
  let newString = '';
  for(let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

// indexOf - Implement the indexOf function for arrays.
// isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
// missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.