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
