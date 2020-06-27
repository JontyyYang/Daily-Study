const lastRemaining = (n: number, m: number): number => {
  let ans = 0;
  for (let i = 2; i <= n; i++) {
    ans = (ans + m) % i;
  }
  return ans;
};

console.log(lastRemaining(5, 3));
