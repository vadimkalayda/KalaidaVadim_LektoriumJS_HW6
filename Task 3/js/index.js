// isPrime - Returns true or false, indicating whether the given number is prime.
function isPrime(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  if(num > 1) {
    return true;
  } else {
    return false;
  }
}
// factorial - Returns a number that is the factorial of the given number.
function myFactorial(num) {
  let factorialNumber = 1;
  for(let i = 1; i <= num; i++) {
    factorialNumber *= i;
  }
  return factorialNumber;
}
// fib - Returns the nth Fibonacci number.
function fib(num) {
  if(num <= 1) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
}
// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
function isSorted(arr) {
  let isSortedVariable = true;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > arr[i + 1]) {
      isSortedVariable = false;
    }
  }
  return isSortedVariable;
}
// reverse - Reverses the given string (yes, using the built in reverse function is cheating).
function myReverse(str) {
  let newString = '';
  for(let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
// indexOf - Implement the indexOf function for arrays.
function myIndexOf(arr, num) {
  let indexOfNumber = -1;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === num) {
      indexOfNumber = i;
    }
  }
  return indexOfNumber;
}
// isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
function isPalindrome(string) {
  let len = Math.floor(string.length / 2);
  for(let i = 0; i < len; i++) {
    if(string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
}
// missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.

// isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.

console.log('isPrime(number) - check a number is prime or not');
console.log('myFactorial(number) - return factorial of a number');
console.log('fib(number) - return fibonacci number');
console.log('isSorted(array) - check array is sorted or not');
console.log('myReverse(string) - reverse method');
console.log('myIndexOf(array, number) - find number in array and return index');
console.log('isPalindrome(string) - check string is palindrome or not')
//console.log() missing
//console.log() isBalanced