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
