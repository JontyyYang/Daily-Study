const reverse = function () {
  let x = -214;
  const s = [];
  console.log(213);
  if (x < 0) {
    s.push('-');
    x = Math.abs(x); //把负数转换为正数
  }
  while (x > 0) {
    const a = x % 10;
    s.push(a);
    x = parseInt(x / 10);
  }
  console.log(s);
};
reverse();
