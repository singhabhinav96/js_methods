// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
var max = 0;
numbers.forEach(function(largest) {
  if (max < largest) max = largest;
});
console.log(max);

// Find longest string in strings
var largestword = "";
strings.forEach(function(largest) {
  if (largestword.length < largest.length) largestword = largest;
});
console.log(largestword);

// Find all the even numbers
var neven = [];
numbers.forEach(function(even) {
  if (even % 2 == 0) neven.push(even);
});
console.log(neven);

// Find all the odd numbers
var nodd = [];
numbers.forEach(function(findOdd) {
  if (findOdd % 2 != 0) nodd.push(findOdd);
});
console.log(nodd);

// Find all the words that contain 'is' use string method 'includes'
var nword = array => array.filter(str => str.includes("is") == true);

// Find all the words that contain 'is' use string method 'indexOf'
var word = array => array.filter(str => str.indexOf("is") != -1);

// Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(function(element) {
  element % 3 == 0;
});

//  Sort Array from smallest to largest
numbers.sort(function(element, num) {
  return element - num;
});

// Remove the last word in strings
strings.pop();

// Add a new word in the array
numbers.splice(1, 0, "word");

// Remove the first word in the array
numbers.shift("word");

// Place a new word at the start of the array use (upshift)
numbers.unshift("word");

// Make a subset of numbers array [18,9,7,11]
var subsetNumbers = numbers.slice(3, 7);

// Make a subset of strings array ['a','collection']
var subsetStrings = strings.slice(2, 4);

// Replace 12 & 18 with 1221 and 1881
numbers.splice(8, 2, 1221, 1881);

// Replace words with string in strings array
strings.splice(5, 1, "string");

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
var findj = customers.filter(elem => elem.firstname.startsWith("J"));
// Create new array with firstname and lastname
var newarray = [];
customers.forEach(function(element) {
  newarray.push(`${element.firstname} ${element.lastname}`);
});

// Sort the array created above alphabetically
newarray.sort();
