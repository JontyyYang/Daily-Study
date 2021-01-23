const findQuestion = (str: string, len: number): string[] => {
  if (typeof str !== 'string' || typeof len !== 'number' || len < 0) {
    throw new Error('参数错误');
  }

  const allSubStr = new Map();
  let finalStr = [];
  for (let i = 0; i !== str.length - len + 1; i++) {
    const tempStr = str.substr(i, len);

    if (allSubStr.has(tempStr)) {
      finalStr.push(tempStr);
    } else {
      allSubStr.set(tempStr, 1);
    }
  }
  finalStr = [...new Set(finalStr)].sort();
  console.log(finalStr);
  return finalStr;
};

findQuestion('AAAAAAAABBAAAAAAAA', 8);
findQuestion('AAACCCAAACCCAAA', 2).sort(), ['AA', 'AC', 'CA', 'CC'];

export {};
