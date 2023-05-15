// Calculator Class
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }
}

// Create a new calculator instance
const myCalculator = new Calculator();

// Perform calculations
const sum = myCalculator.add(5, 3);
const difference = myCalculator.subtract(8, 2);
const product = myCalculator.multiply(4, 6);
const quotient = myCalculator.divide(10, 2);

// Log the results
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
