'use strict';
/*
 * @Author: jontyy
 * @Date: 2020-05-20 11:23:38
 * @Description:
 */
Object.defineProperty(exports, '__esModule', {value: true});
exports.getSpecialData = void 0;
const data = [
  {
    text: '全部',
    value: -1,
  },
  {
    text: '待付款',
    value: 3,
  },
  {
    text: '待接单',
    value: 5,
  },
  {
    text: '已发货',
    value: 6,
  },
  {
    text: '待成团',
    value: 50,
  },
  {
    text: '交易成功',
    value: 100,
  },
  {
    text: '交易关闭',
    value: 99,
  },
  {
    text: '退款中',
    value: 600001,
  },
  {
    text: '退款结束',
    value: 600002,
  },
];
const container = [3, 5];
exports.getSpecialData = (originArray, targetValue) => {
  return originArray.filter(item => {
    return targetValue.indexOf(item.value) > -1;
  });
};
console.log(exports.getSpecialData(data, container));
