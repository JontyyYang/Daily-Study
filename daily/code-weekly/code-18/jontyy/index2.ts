const replaceSpace = (s: string): string => {
  const reg = /\s/g;
  const ss = s.replace(reg, '%20');
  return ss;
};

const s = 'We are happy.';
console.log(replaceSpace(s));

export {};
