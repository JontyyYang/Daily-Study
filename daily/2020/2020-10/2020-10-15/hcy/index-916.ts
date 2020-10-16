// 1.计算时针与分针夹角的度数
const time = '9:10';
function Radius(time: any) {
  const timeArr = time.split(':');
  const hourRadius = (360 / 12) * timeArr[0];
  const minuteRadius = (360 / 60) * timeArr[1];
  return Math.abs(hourRadius - minuteRadius);
}
// console.log('11', Radius(time));
// 2.1.TCP与UDP的区别。2.TCP是如何保证包的顺序传输？

// 三次握手，四次挥手

// 3.按json的某一个字段排序,对data的time字段，按照由小到大排序；如果为空，则按原来的顺序放在后面。输入：
const data = [
  {name: 'xixi', time: '2019-09-03'},
  {name: 'haha', time: '2019-09-02'},
  {name: 'hehe', time: ''},
];
function timeToNum(time: any) {
  return +time.replace(/-/g, '');
}

function Sort(data: any) {
  data.sort((a: any, b: any) => {
    if (a.time.length === 0 || b.time.length === 0) return 0;
    return timeToNum(a.time) - timeToNum(b.time);
  });
  return data;
}
// console.log('22', Sort(data));
// { name: 'haha', time: '2019-09-02' },{ name: 'xixi', time: '2019-09-03' },{ name: 'hehe', time: '' } ]

// 4.IP地址还原, 输入：'25525512212',输出：['255.255.122.12', '255.255.12.212']
// https://leetcode-cn.com/problems/restore-ip-addresses/

/**
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

有效的 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效的 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效的 IP 地址。

 示例 1：

输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
示例 2：

输入：s = "0000"
输出：["0.0.0.0"]
示例 3：

输入：s = "1111"
输出：["1.1.1.1"]
示例 4：

输入：s = "010010"
输出：["0.10.0.10","0.100.1.0"]
示例 5：

输入：s = "101023"
输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 

提示：

0 <= s.length <= 3000
s 仅由数字组成
*/

const s = '101023';
function IpBack(str: string) {
  if (str.length < 4) return '无效字符串';
  const s: any[] = [];
  const search = (cur: any[], sub: string) => {
    // 数组长度等于 4 且组合起来与之前的字符串相等
    if (cur.length === 4 && cur.join('') === str) {
      s.push(cur.join('.'));
    } else {
      const len = Math.min(3, sub.length);
      for (let i = 0; i < len; i++) {
        // 截取字符串 1 ~ 3
        const tmp = sub.substr(0, i + 1);
        if (+tmp < 256) {
          search(cur.concat([tmp]), sub.substr(i + 1));
        }
      }
    }
  };
  search([], str);
  return s;
}
console.log('33', IpBack(s));
