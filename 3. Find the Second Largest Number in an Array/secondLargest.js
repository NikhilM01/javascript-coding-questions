function secondLargest(arr) {
    if (arr.length < 2) {
      return "Array must have at least two elements.";
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (let num of arr) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num < largest) {
        secondLargest = num;
      }
    }
  
    return secondLargest === -Infinity
      ? "No second largest number found."
      : secondLargest;
  }
  
  // Example
  console.log(secondLargest([10, 20, 5, 30, 15])); // Output: 20
  console.log(secondLargest([42])); // Output: Array must have at least two elements.
  