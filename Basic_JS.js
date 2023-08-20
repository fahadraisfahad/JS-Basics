// Question 1 : Reverse a string without using the built-in reverse() method.

function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  

  const inputString = 'Hello, World!';
  const reversedString = reverseString(inputString);
  console.log(reversedString);


// Question 2 : Count the number of vowels in a given string.

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    }
  }

  return vowelCount;
}

const inputaString = 'Hello, World!';
const numberOfVowels = countVowels(inputString);
console.log(`Number of vowels: ${numberOfVowels}`);


// Question 3 : Convert the first letter of each word in a sentence to uppercase.

function capitalizeWords(sentence) {
  const words = sentence.split(' ');

  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(' ');
}

const inputSentence = "this is javascript course.";
const capitalizedSentence = capitalizeWords(inputSentence);
console.log(capitalizedSentence);


// Question 4 : Check if a string is a palindrome.

function checkPalindrome(string) {
 // find the length of a string
  const len = string.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
      // check if first and last string are same
      if (string[i] !== string[len - 1 - i]) {
          return 'It is not a palindrome';
      }
  }
  return 'It is a palindrome';
}

const string = prompt('Enter a string: ');
const value = checkPalindrome(string);
console.log(value);


// Question 5 : Find the sum of all positive numbers in an array.

function sumOfPositiveNumbers(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
}

const numbers = [3, -2, 10, -1, 10, -5, 8];
const positiveSum = sumOfPositiveNumbers(numbers);
console.log(`Sum of positive numbers: ${positiveSum}`);

// Question 6 : Find the index of the first occurrence of a specific element in an array.

function indexOfElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index of the first occurrence
    }
  }
  return -1; // Return -1 if the element is not found in the array
}

const numbersArray = [3, -2, 7, -1, 10, -5, 8];
const targetNumber = 7;
const index = indexOfElement(numbersArray, targetNumber);

if (index !== -1) {
  console.log(`Element ${targetNumber} found at index ${index}`);
} else {
  console.log(`Element ${targetNumber} not found in the array`);
}


// Question 7 : Remove all duplicates from an array without built-in methods.

function removeDuplicates(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

const numberss = [3, 5, 2, 7, 5, 2, 8, 1, 3];
const uniqueNumbers = removeDuplicates(numberss);
console.log(uniqueNumbers);

// Question 8 : Sort the array in ascending and descending without built-in methods.

// Ascending Order:
function sortAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const Arraynumbers = [3, 5, 2, 7, 1, 8];
const ascendingNumbers = sortAscending(Arraynumbers.slice());
console.log("Ascending:", ascendingNumbers);

// Descending Order:
function sortDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const numberst = [3, 5, 2, 7, 1, 8];
const descendingNumbers = sortDescending(numberst.slice());
console.log("Descending:", descendingNumbers);


// Question 9 : Print all even numbers between 1 and 20 using a while loop.

let number = 2;

while (number <= 20) {
  console.log(number);
  number += 2;
}

// Question 10 : Calculate the factorial of a number using a do-while loop.

function factorial(number) {
  if (number < 0) {
    return undefined; // Factorial is not defined for negative numbers
  } else if (number === 0 || number === 1) {
    return 1; // Factorial of 0 and 1 is 1
  } else {
    let result = 1;
    let i = 1;
    
    do {
      result *= i;
      i++;
    } while (i <= number);
    
    return result;
  }
}
const num = 9;
const factorialResult = factorial(num);
console.log(`Factorial of ${num} is ${factorialResult}`);

// Question 11 : Iterate through the properties of an object using a for-in loop.

const person = {
  firstName: 'Fahad',
  lastName: 'Rais',
  age: 30,
  email: 'fahadrais@gmail.com'
};
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}

// Question 12 : Loop through an array using a for-of loop and double each element.

const numbersd = [2, 5, 8, 11, 14];

for (let number of numbersd) {
  console.log(number * 2);
}


// Question 13 : Check if a number is even or odd and return a corresponding message.

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return `${number} is even.`;
  } else {
    return `${number} is odd.`;
  }
}

const num1 = 220;
const num2 = 135;

console.log(checkEvenOrOdd(num1));
console.log(checkEvenOrOdd(num2));


// Question 14 : Find the maximum of three numbers using nested ternary operators.

function findMax(x, y, z) {
  const max = x > y ? (x > z ? x : z) : (y > z ? y : z);
  return max;
}

const num12 = 10;
const num13 = 25;
const num14 = 15;

const maximum = findMax(num12, num13, num14);
console.log(`The maximum of ${num12}, ${num13}, and ${num14} is ${maximum}.`);

 
// Question 15 : Determine if a year is a leap year or not.

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true; // It's a leap year
  } else {
    return false; // It's not a leap year
  }
}

// Example usage
const year1 = 2000;
const year2 = 2024;
const year3 = 2022;

console.log(`${year1} is a leap year: ${isLeapYear(year1)}`);
console.log(`${year2} is a leap year: ${isLeapYear(year2)}`);
console.log(`${year3} is a leap year: ${isLeapYear(year3)}`);
