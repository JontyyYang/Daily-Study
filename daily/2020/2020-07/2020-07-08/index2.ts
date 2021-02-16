const versionArray = ['1.2.3', '2.0.0', '1.4.5'];
const VersionLength = 3;

type normalStringArray = string[];

const formatStringToArray = (originArr: normalStringArray): number[] => {
  const finalArr: number[] = [];
  originArr.forEach(item => {
    finalArr.push(Number.parseInt(item));
  });
  return finalArr;
};

const sortRule = (oneParam: string, otherParam: string): number => {
  const oneParamArray = oneParam.split('.');
  const oneParamArrayLength = oneParamArray.length;
  const otherParamArray = otherParam.split('.');
  const otherParamArrayLength = otherParamArray.length;

  if (oneParamArrayLength !== VersionLength || otherParamArrayLength !== VersionLength) {
    throw new Error('版本信息可能有问题， 需要再次确认下');
  }

  const oneParamNumber = formatStringToArray(oneParamArray);
  const otherParamNumber = formatStringToArray(otherParamArray);

  for (let i = 0; i !== 3; i++) {
    if (oneParamNumber[i] < otherParamNumber[i]) {
      return -1;
    } else if (oneParamNumber[i] > otherParamNumber[i]) {
      return 1;
    }
  }
  return 0;
};

const sortArray = (originArray: normalStringArray = []): normalStringArray => {
  // 如果这里的异常情况会很多的话， 也可以单独抽出来做一个错误处理
  if (originArray.length === 0) {
    throw new Error('参数不能为空或者undefined');
  }

  if (originArray.length === 1) {
    return originArray;
  }

  originArray.sort((a, b) => {
    return sortRule(a, b);
  });

  return originArray;
};

console.log(sortArray(versionArray));

export {};
