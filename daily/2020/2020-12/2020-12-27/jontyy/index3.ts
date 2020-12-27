/*
 * @Author: jontyy
 * @Date: 2020-12-27 18:31:09
 * @Description: 12-27 打卡
 */

const isIsomorphic = (s: string, t: string): boolean => {
  const sMap = new Map();
  const tMap = new Map();
  for (let i = 0, j = s.length; i !== j; i++) {
    if (
      (sMap.get(s[i]) && sMap.get(s[i]) !== t[i]) ||
      (tMap.get(t[i]) && tMap.get(t[i]) !== s[i])
    ) {
      return false;
    }

    sMap.set(s[i], t[i]);
    tMap.set(t[i], s[i]);
  }
  return true;
};

const s = 'eag',
  t = 'add';

console.error(isIsomorphic(s, t));
export {};
