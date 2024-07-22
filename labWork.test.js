//capitalization
const { test } = require('picomatch');
const {
    capitalizeFirstLetter,
    reverse,
    palindrome,
    wordCount,
    double,
    filterEven,
    sum,
    average,
    fullName,
    isAdult,
    filterByAge,
    compose
  } = require('./labWork');

  

// Reversing a string

test('reverses a non-empty string correctly', () => {
    expect(reverse('hello')).toBe('olleh');
    expect(reverse('world')).toBe('dlrow');
  });
  
  test('returns "invalid input" for non-string input', () => {
    expect(reverse(123)).toBe('invalid input');
    expect(reverse(null)).toBe('invalid input');
    expect(reverse(undefined)).toBe('invalid input');
    expect(reverse({})).toBe('invalid input');
    expect(reverse([])).toBe('invalid input');
  });
  
  test('returns "invalid input" for an empty string', () => {
    expect(reverse('')).toBe('invalid input');
  });
  
  test('reverses a single character string correctly', () => {
    expect(reverse('a')).toBe('a');
    expect(reverse('z')).toBe('z');
  });
  
  test('reverses a string with special characters correctly', () => {
    expect(reverse('!@#$')).toBe('$#@!');
    expect(reverse('12345')).toBe('54321');
  });

  //Palindrome

  test('returns "invalid input" for empty string or falsy input', () => {
    expect(palindrome('')).toBe('invalid input');
    expect(palindrome(null)).toBe('invalid input');
    expect(palindrome(undefined)).toBe('invalid input');
  });
  
  test('identifies palindromes correctly', () => {
    expect(palindrome('madam')).toBe('It a palindrome');
    expect(palindrome('racecar')).toBe('It a palindrome');
    expect(palindrome('level')).toBe('It a palindrome');
    expect(palindrome('noon')).toBe('It a palindrome');
  });
  
  test('identifies non-palindromes correctly', () => {
    expect(palindrome('hello')).toBe('It not a palindrome');
    expect(palindrome('world')).toBe('It not a palindrome');
    expect(palindrome('palindrome')).toBe('It not a palindrome');
  });
  
  test('handles single character strings correctly', () => {
    expect(palindrome('a')).toBe('It a palindrome');
    expect(palindrome('z')).toBe('It a palindrome');
  });
  
  test('handles strings with special characters and spaces', () => {
    expect(palindrome('A man a plan a canal Panama')).toBe('It not a palindrome'); // Note: spaces and case matter
    expect(palindrome('No lemon, no melon')).toBe('It not a palindrome'); // Note: spaces and case matter
  });

 //Word Count

test('returns "Invalid input" for non-string or empty input', () => {
    expect(wordCount('')).toBe('Invalid input. Please provide a string.');
    expect(wordCount(null)).toBe('Invalid input. Please provide a string.');
    expect(wordCount(undefined)).toBe('Invalid input. Please provide a string.');
    expect(wordCount(123)).toBe('Invalid input. Please provide a string.');
    expect(wordCount({})).toBe('Invalid input. Please provide a string.');
  });
  
  test('returns the correct word count for a valid string', () => {
    expect(wordCount('Hello world')).toBe(2);
    expect(wordCount('This is a test')).toBe(4);
    expect(wordCount('One more test case')).toBe(4);
  });
  
  test('trims leading and trailing whitespace', () => {
    expect(wordCount('   Hello world   ')).toBe(2);
    expect(wordCount('   This is a test   ')).toBe(4);
  });
  
  test('handles multiple spaces between words', () => {
    expect(wordCount('Hello   world')).toBe(2);
    expect(wordCount('This  is  a  test')).toBe(4);
  });
  
  test('returns 0 for a string with only spaces', () => {
    expect(wordCount('   ')).toBe(0);
  });


  
// Array Transformations

//Doubling

test('doubles the numbers in an array correctly', () => {
    expect(double([1, 2, 3])).toEqual([2, 4, 6]);
    expect(double([0, -1, 5])).toEqual([0, -2, 10]);
    expect(double([10, 20])).toEqual([20, 40]);
  });

  test('handles an empty array correctly', () => {
    expect(double([])).toEqual([]);
  });
  
  test('doubles large numbers correctly', () => {
    expect(double([1000000, 2000000])).toEqual([2000000, 4000000]);
  });
  
  test('handles arrays with only one number correctly', () => {
    expect(double([5])).toEqual([10]);
    expect(double([-3])).toEqual([-6]);
  });

//   filtering even number

  test('filters even numbers correctly', () => {
    expect(filterEven([1, 2, 3, 4, 5])).toEqual([2, 4]);
    expect(filterEven([0, 1, 2, 3, 4, 5])).toEqual([0, 2, 4]);
    expect(filterEven([0, 1, 2, 3, 4, 5, 6])).toEqual([0, 2, 4, 6]);
  });

  test('handles an empty array correctly', () => {
    expect(filterEven([])).toEqual([]);
  });
  
  test('handles arrays with only odd numbers correctly', () => {
    expect(filterEven([1, 3, 5])).toEqual([]);  
    expect(filterEven([0, 2, 4])).toEqual([]);
  });

  // sum all numbers in array

  test('sums all numbers in an array correctly', () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([0, -1, 5])).toBe(4);
    expect(sum([10, 20])).toBe(30);
  });    

  test('handles an empty array correctly', () => {
    expect(sum([])).toBe(0);
  });

  test('handles arrays with only one number correctly', () => {
    expect(sum([5])).toBe(5);
    expect(sum([-3])).toBe(-3);
  });

//    Average of numbers in array

  test('averages all numbers in an array correctly', () => {
    expect(average([1, 2, 3])).toBe(2);
    expect(average([0, -1, 5])).toBe(1);
    expect(average([10, 20])).toBe(15);
  });

  test('handles an empty array correctly', () => {
    expect(average([])).toBe(0);
  });

  test('handles arrays with only one number correctly', () => { 
    expect(average([5])).toBe(5);
    expect(average([-3])).toBe(-3);
  });


// Object Transformation
// Returns the full name of a person object 

test('returns the full name of a person object correctly', () => {
    expect(fullName({ firstName: 'John', lastName: 'Doe' })).toBe('The full name is: John Doe');
    expect(fullName({ firstName: 'Jane', lastName: 'Doe' })).toBe('The full name is: Jane Doe');
    expect(fullName({ firstName: 'John', lastName: 'Smith' })).toBe('The full name is: John Smith');
    expect(fullName({ firstName: 'Jane', lastName: 'Smith' })).toBe('The full name is: Jane Smith');
  });

  test('returns "invalid input" for an empty object', () => {
    expect(fullName({})).toBe('invalid input');
  });

//    //Adult age

  test('returns true if the person is an adult', () => {
    expect(isAdult({ age: 18 })).toBe(true);
    expect(isAdult({ age: 17 })).toBe(false);
  });

  test('returns "invalid input" for an empty object', () => {
    expect(isAdult({})).toBe('invalid input');
  });

  //filter by age

  test('filters people by age', () => { 
    expect(filterByAge([{ age: 3 }, { age: 4 }], 3)).toEqual([{ age: 3 }]);
    expect(filterByAge([{ age: 3 }, { age: 4 }], 4)).toEqual([{ age: 4 }]);
  });

  test('handles an empty array correctly', () => {
    expect(filterByAge([], 3)).toEqual([]);
  });

  test('handles arrays with only one person correctly', () => {
    expect(filterByAge([{ age: 3 }], 3)).toEqual([{ age: 3 }]);
  });

    
  // Function Composition

  test('composes functions correctly', () => {
    expect(compose((x) => x + 1, (x) => x * 2)(3)).toBe(8);
  });

  

 





