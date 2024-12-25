function swapNumbers(a, b) {
    console.log(`Before swapping: a = ${a}, b = ${b}`);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(`After swapping: a = ${a}, b = ${b}`);
  }
  
  // Example
  swapNumbers(5, 8);
  