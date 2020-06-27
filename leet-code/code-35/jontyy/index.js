var n = 5;
var k = 3;
var relation = [
  [0, 2],
  [2, 1],
  [3, 4],
  [2, 3],
  [1, 4],
  [2, 0],
  [0, 4],
];
var numWays = function (n, relation, k) {
  var dp = new Array(k + 1).fill(0).map(function () {
    return new Array(n + 1).fill(0);
  });
  dp[0][0] = 1;
  for (var i = 1; i <= k; i++) {
    for (var _i = 0, relation_1 = relation; _i < relation_1.length; _i++) {
      var r = relation_1[_i];
      dp[i][r[1]] += dp[i - 1][r[0]];
    }
  }
  return dp[k][n - 1];
};
console.log(numWays(n, relation, k));
