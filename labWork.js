// String Transformation

//Capitalization
// function capitalizeFirstLetter(str){
//     return str.charAt(0).toUpperCase() + str.slice(1, str.length)
// }
// console.log(capitalizeFirstLetter("harrizle"))

//Reversing a string
const reverse = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return "invalid input";
  }

  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
};
console.log(reverse("Harrizle"))

//Palindrome
const palindrome = (str) => {
    if (!str) {
      return "invalid input"
    }
    let strReversed = str.split("").reverse().join("")
    return strReversed === str ? "It a palindrone" : "It not a palindrone"
  }
console.log(palindrome("kayak"));

  //Word Count
  const wordCount = (input) => {
    if (!input || typeof input !== 'string') {
      return 'Invalid input. Please provide a string.';
    }
    const wordArray = input.trim().split(' ');
    return wordArray.length;
  };
  
console.log(wordCount("We go make am"))


// Array Transformations

//Doubling
function double(arr) {
    return arr.map(num => num * 2);
  }
  console.log(double([2,3,4]))

  //filtering even number
const filterEven = (arr) => {
    return arr.filter((num) => num % 2 === 0)
  }
  console.log(filterEven([1, 2, 3, 4, 5, 6, 7, 8]))
  
  // sum all numbers in array
  function sum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  console.log(sum([1, 2, 3, 4]))

  // Average of numbers in array
  function average(arr) {
    if (arr.length === 0) {
      return 0;
    }
    return sum(arr) / arr.length;
  }
  console.log(average([1, 2, 3, 4, 5, 6, 7, 8]))

  
// Object Transformation

// Returns the full name of a person object 
const fullName = (person) => {
    if (!person) {
      return "invalid input"
    }
    return `The full name is: ${person.firstName} ${person.lastName}`
  }
  console.log(fullName({ firstName: "Harriet", lastName: "Buadee" }))

  //Adult age
function isAdult(person) {
    return person.age >= 18;
  }
  console.log(isAdult({ age: 11 }))
  
  //filter by age
  function filterByAge(people, minAge) {
    return people.filter(person => person.age >= minAge);
  }
  console.log(filterByAge([{ age: 3 }, { age: 4 }], 3))
  
  // Function Composition
const compose = (...fn) => (x) => fn.reduceRight((v, f) => f(v), x);
console.log(compose(capitalizeFirstLetter, reverse)("harrizle"));
console.log(compose(palindrome)("kayak"));
console.log(compose(wordCount)("We go make am"));
  
  
  