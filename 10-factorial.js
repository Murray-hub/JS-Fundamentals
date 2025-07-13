function factorial(n) {
  if (isNaN(n)) {
    return 1;
  }
  if (n === 0 || n === 1) {
    return 1; // base case
  }
  return n * factorial(n - 1); // recursive case
}

const arg = process.argv[2];
const num = parseInt(arg);
const result = factorial(num);
console.log(result);