function thirdHighest(arr) {
  let first = null, second = null, third = null;

  for (let num of arr) {
    // Skip if num is already recorded as one of the top three
    if (num === first || num === second || num === third) continue;

    if (first === null || num > first) {
      third = second;
      second = first;
      first = num;
    } else if (second === null || num > second) {
      third = second;
      second = num;
    } else if (third === null || num > third) {
      third = num;
    }
  }

  return third === null ? null : third;
}

// Example:
const numbers = [10, 5, 20, 20, 8, 12];
console.log(thirdHighest(numbers)); // Output: 10
