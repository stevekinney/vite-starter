/**
 * Returns the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
export const add = (a, b) => {
  return a + b;
};

/**
 * Returns the difference between two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The difference between a and b.
 */
export const subtract = (a, b) => {
  return a - b;
};

/**
 * Returns the product of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of a and b.
 */
export const multiply = (a, b) => {
  return a * b;
};

/**
 * Returns the quotient of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The quotient of a and b.
 */
export const divide = (a, b) => {
  return a / b;
};

/**
 * Returns the remainder of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The remainder of a and b.
 */
export const modulo = (a, b) => {
  return a % b;
};

/**
 * Returns the factorial of a number.
 * @param {number} n - The number to find the factorial of.
 * @returns {number} The factorial of n.
 */
export const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

/**
 * Returns the nth Fibonacci number.
 * @param {number} n - The index of the Fibonacci number to find.
 * @returns {number} The nth Fibonacci number.
 */
export const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

/**
 * Returns the greatest common divisor of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The greatest common divisor of a and b.
 */
export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};

/**
 * Returns the least common multiple of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The least common multiple of a and b.
 */
export const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};
