var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
var max = "";
strings.forEach(function(element) {
  if (max.length < element.length) max = element;
});
console.log(max);

var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
var sum = 0;
function sumArray(numbers1) {
  for (let i = 0; i < numbers1.length; i++) {
    sum += numbers1[i];
  }
  return sum;
}
sumArray(numbers1);
// Use reduce method of array
var sum = numbers1.reduce(function(acc, curr) {
  return acc + curr;
});
// Use the above sum and calculate the average.
var avg = sum / numbers1.length;

var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
var sum = 0;
function averageNumbers(numbers2) {
  for (let i = 0; i < numbers2.length; i++) {
    sum += numbers2[i];
    avg = sum / numbers2.length;
  }
  return avg;
}
averageNumbers(numbers2);

var words2 = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace"
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
