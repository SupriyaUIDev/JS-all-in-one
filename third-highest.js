function thirdHighest(arr) {
    let first = -Infinity, second = -Infinity, third = -Infinity;
  
    for (let num of arr) {
      if (num > first) {
        third = second;
        second = first;
        first = num;
      } else if (num > second && num < first) {
        third = second;
        second = num;
      } else if (num > third && num < second) {
        third = num;
      }
    }
  
    return third === -Infinity ? null : third;
  }
  
  // Example:
  const numbers = [10, 5, 20, 20, 8, 12];
  console.log(thirdHighest(numbers)); // Output: 10
  