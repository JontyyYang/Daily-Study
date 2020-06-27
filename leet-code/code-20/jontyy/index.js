const calculate = (n, val1 = 1, val2 = 0) => {
  if (n < 1) {
    return val2;
  } else {
    return calculate(n - 1, val2, (val1 + val2) % 1000000007);
  }
};

const fib = n => {
  return calculate(n);
};
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));

// const numWays = n => {
//   return calculate(n);
// };

// const calculate = (n, ac1 = 1, ac2 = 1) => {
//   if (n < 2) {
//     return ac2;
//   } else {
//     return calculate(n - 1, ac2, (ac1 + ac2) % 1000000007);
//   }
// };
