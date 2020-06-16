// enum 会反向渲染一遍，也就是通过值可以拿到键，也可以通过键拿到值
// 这里生成的js文件真的很不错
enum weeklyDay {
  Monday = 1,
  Tuesday = 2,
}

console.log(weeklyDay.Monday);
console.log(weeklyDay[1]);
console.log(weeklyDay);

export {};
