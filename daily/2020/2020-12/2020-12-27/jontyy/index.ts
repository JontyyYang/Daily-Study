/*
 * @Author: jontyy
 * @Date: 2020-12-27 17:42:52
 * @Description: 12-27 leet-code打卡
 */

//  双重映射，如有重复， 其实可以直接return。不需要完全匹配字符串
//  可以先用一个map，映射从s到t，然后从t到s，如果有任何一个和之前的冲突了，就可以return了
const isIsomorphic = (s: string, t: string): boolean => {
  const map = new Map();
  const extraMap = new Map();
  const sArr = s.split('');

  sArr.forEach((item, index) => {
    if (!map.has(item) && !extraMap.has(t[index])) {
      extraMap.set(t[index], true);
      map.set(item, t[index]);
    }
  });

  sArr.forEach((item, index) => {
    sArr[index] = map.get(item);
  });

  return t === sArr.join('');
};
const s = 'ab',
  t = 'aa';

console.error(isIsomorphic(s, t));
export {};
