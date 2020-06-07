// 先声明函数，函数的参数分别是a，b
function returnCalculateValue(a, b) {
  var res = a + b;
  if (res > 4) {
    return 'Below';
  } else {
    return 'Over';
  }
  //   或者
  //   return res > 4 ? 'Below' : 'Over';
}

// 这里执行函数
// console.log 是在控制台中输出
console.log(returnCalculateValue(1, 2));
console.log(returnCalculateValue(10, 2));

var num1 = 2,
  num2 = 4;

let m = num1 + num2 > 4 ? 'below' : 'over';
console.log(m);
