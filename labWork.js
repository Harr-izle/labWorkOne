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
  
  