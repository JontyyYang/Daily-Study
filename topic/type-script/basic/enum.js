'use strict';
exports.__esModule = true;
// enum 会反向渲染一遍，也就是通过值可以拿到键，也可以通过键拿到值
var weeklyDay;
(function (weeklyDay) {
  weeklyDay[(weeklyDay['Monday'] = 1)] = 'Monday';
  weeklyDay[(weeklyDay['Tuesday'] = 2)] = 'Tuesday';
})(weeklyDay || (weeklyDay = {}));
console.log(weeklyDay.Monday);
console.log(weeklyDay[1]);
console.log(weeklyDay);
