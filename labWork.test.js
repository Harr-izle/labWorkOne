//capitalization
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
// test('capitalizes the first letter of a string', () => {
//     expect(capitalizeFirstLetter('hello')).toBe('Hello');
//     expect(capitalizeFirstLetter('world')).toBe('World');
// });

// test('returns an empty string if the input is an empty string', () => {
//     expect(capitalizeFirstLetter('')).toBe('');
// });

// test('does not change the case of the rest of the string', () => {
//     expect(capitalizeFirstLetter('hELLO')).toBe('HELLO');
//     expect(capitalizeFirstLetter('wORLD')).toBe('WORLD');
// });

// test('handles single character strings', () => {
//     expect(capitalizeFirstLetter('a')).toBe('A');
//     expect(capitalizeFirstLetter('z')).toBe('Z');
// });

// Reversing a string

// test('reverses a non-empty string correctly', () => {
//     expect(reverse('hello')).toBe('olleh');
//     expect(reverse('world')).toBe('dlrow');
//   });
  
//   test('returns "invalid input" for non-string input', () => {
//     expect(reverse(123)).toBe('invalid input');
//     expect(reverse(null)).toBe('invalid input');
//     expect(reverse(undefined)).toBe('invalid input');
//     expect(reverse({})).toBe('invalid input');
//     expect(reverse([])).toBe('invalid input');
//   });
  
//   test('returns "invalid input" for an empty string', () => {
//     expect(reverse('')).toBe('invalid input');
//   });
  
//   test('reverses a single character string correctly', () => {
//     expect(reverse('a')).toBe('a');
//     expect(reverse('z')).toBe('z');
//   });
  
//   test('reverses a string with special characters correctly', () => {
//     expect(reverse('!@#$')).toBe('$#@!');
//     expect(reverse('12345')).toBe('54321');
//   });

  //Palindrome
//   test('returns "invalid input" for empty string or falsy input', () => {
//     expect(palindrome('')).toBe('invalid input');
//     expect(palindrome(null)).toBe('invalid input');
//     expect(palindrome(undefined)).toBe('invalid input');
//   });
  
//   test('identifies palindromes correctly', () => {
//     expect(palindrome('madam')).toBe('It a palindrome');
//     expect(palindrome('racecar')).toBe('It a palindrome');
//     expect(palindrome('level')).toBe('It a palindrome');
//     expect(palindrome('noon')).toBe('It a palindrome');
//   });
  
//   test('identifies non-palindromes correctly', () => {
//     expect(palindrome('hello')).toBe('It not a palindrome');
//     expect(palindrome('world')).toBe('It not a palindrome');
//     expect(palindrome('palindrome')).toBe('It not a palindrome');
//   });
  
//   test('handles single character strings correctly', () => {
//     expect(palindrome('a')).toBe('It a palindrome');
//     expect(palindrome('z')).toBe('It a palindrome');
//   });
  
//   test('handles strings with special characters and spaces', () => {
//     expect(palindrome('A man a plan a canal Panama')).toBe('It not a palindrome'); // Note: spaces and case matter
//     expect(palindrome('No lemon, no melon')).toBe('It not a palindrome'); // Note: spaces and case matter
//   });

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