const n = 5;
const k = 3;
const relation = [
  [0, 2],
  [2, 1],
  [3, 4],
  [2, 3],
  [1, 4],
  [2, 0],
  [0, 4],
];

interface ArrayType {
  [key: number]: number;
}

const numWays = (n: number, relation: ArrayType[], k: number) => {
  const dp = new Array(k + 1).fill(0).map(() => new Array(n + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= k; i++) {
    for (const r of relation) {
      dp[i][r[1]] += dp[i - 1][r[0]];
    }
  }
  return dp[k][n - 1];
};

console.log(numWays(n, relation, k));
