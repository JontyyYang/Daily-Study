/*
 * @Author: jontyy
 * @Date: 2020-05-20 11:23:38
 * @Description: 
 */

const data = [{
  "text": "全部",
  "value": -1
}, {
  "text": "待付款",
  "value": 3
}, {
  "text": "待接单",
  "value": 5
}, {
  "text": "已发货",
  "value": 6
}, {
  "text": "待成团",
  "value": 50
}, {
  "text": "交易成功",
  "value": 100
}, {
  "text": "交易关闭",
  "value": 99
}, {
  "text": "退款中",
  "value": 600001
}, {
  "text": "退款结束",
  "value": 600002
}]
const container = [3,5]

// const res = data.filter(item=> {
//   return container.indexOf(item.value)>-1;
// })
// console.log(res)

interface LabelType {
  text: string;
  value: number;
}

export const getSpecialData = (originArray: LabelType[], targetValue: number[]):LabelType[] => {
  return originArray.filter(item => {
    return targetValue.indexOf(item.value)>-1;
  });
};

console.log(getSpecialData(data, container))