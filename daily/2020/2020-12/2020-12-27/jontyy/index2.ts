/*
 * @Author: jontyy
 * @Date: 2020-12-27 18:27:18
 * @Description: 12-27打卡
 */

//  判断s的每一个元素，第一次出现的位置，是否和t对应索引元素第一次出现位置是否相同
const isIsomorphic = (s: string, t: string): boolean => {
  for (let i = 0, j = s.length; i !== j; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
      return false;
    }
  }
  return true;
};
const s = 'egg',
  t = 'add';

console.error(isIsomorphic(s, t));
export {};
