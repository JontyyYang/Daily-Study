export {};

// 1.cookie 和 token 都存放在 header 中，为什么不会劫持 token

// 2.现阶段我们的业务中：node层的作用：对卡门接口返回的数据进行处理，用node来包的好处是什么？？

// 3.[[{name: 1, hidden: false},{name: 2, hidden: false}],[{name: 3, hidden: true},{name: 4, hidden: true}],{name: 5},{name: 6, hidden: false},]，过滤hidden为true的项
const data = [
  [
    {name: 1, hidden: false},
    {name: 2, hidden: true},
  ],
  [
    {name: 3, hidden: true},
    {name: 4, hidden: false},
  ],
  {name: 5},
  {name: 6, hidden: false},
];
function filter(data: any) {
  return data.map((ele: any) => {
    if (Array.isArray(ele)) {
      const list = filter(ele);
      if (list.length > 0) {
        return list.filter(Boolean);
      }
    }
    if (!ele.hidden) {
      return ele;
    }
    return null;
  });
}
// console.log('11', filter(data));

// 4. https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
*/
const str = 'abcaderfbcbb';
const s = 'aa';
function LongStr(str: string) {
  if (str === '') return 0;
  if (str === ' ' || str.length === 1) return 1;
  let max = 0;
  let sub = [str[0]];
  for (let i = 1; i <= str.length - 1; i++) {
    const index = sub.indexOf(str[i]);
    if (index < 0) {
      sub.push(str[i]);
    } else {
      sub.push(str[i]);
      sub = [...sub.splice(index + 1)];
    }
    max = sub.length > max ? sub.length : max;
  }
  return max;
}
console.log('22', LongStr(s));
