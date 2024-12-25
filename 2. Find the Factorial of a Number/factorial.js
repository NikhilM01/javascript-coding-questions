function factorial(n) {
    if (n < 0) {
      return "Factorial is not defined for negative numbers.";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Example
  console.log(factorial(5)); // Output: 120
  console.log(factorial(0)); // Output: 1
  