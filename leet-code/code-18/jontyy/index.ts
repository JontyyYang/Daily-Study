const replaceSpace = (s: string): string => {
  const finalArray: string[] = s.split('');
  const final = finalArray.map(item => {
    return item === ' ' ? '%20' : item;
  });
  return final.join('');
};
const s = 'We are happy.';
console.log(replaceSpace(s));

export {};

// 更好
// var replaceSpace = function(s) {
//   return s.split(" ").join("%20");
// };
