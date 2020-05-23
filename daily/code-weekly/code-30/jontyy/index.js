/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
const reverseLeftWords = (s, n) => {
  return s.substr(n) + s.substr(0, n);
};
const s = 'lrloseumgh',
  k = 6;

console.log(reverseLeftWords(s, k));
