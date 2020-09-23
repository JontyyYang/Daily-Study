/**
 * @description: cut string every specified number
 * @param {string}
 * @return {array}
 */

export const cutStringEveryNumberDigital = (str: string, gap: number): number[] => {
  const res = [];

  while (str.length) {
    res.push(Number.parseInt(str.substr(0, gap), 2));
    str = str.substr(gap);
  }

  return res;
};

/**
 * @description: a function to convert a string to binary
 * @param {string}
 * @return {binary}
 */

export const generateBinary = (str: string): string => {
  // 采用的是utf-8的编码格式， 所以一个英文字符等于一个字节，一个中文字符等于三个字节
  // 2的3次方， 所以最后要补齐八位
  const res = str
    .split('')
    .map(item => item.charCodeAt(0).toString(2).padStart(8, '0'))
    .join('');

  return res;
};

/**
 * @description:  a function to convert binary to string
 * @param {binary}
 * @return {string}
 */

export const convertBinaryToString = (str: string): string => {
  // let res = '';

  // cutStringEveryNumberDigital(str, 8).map(item => {
  //   res += String.fromCharCode(Number(item));
  // });

  // return res;

  // String.formCharCode 可以接受一个Unicode字符或者多个，返回一个字符串
  return String.fromCharCode(...cutStringEveryNumberDigital(str, 8));
};

// test
// const res = generateBinary('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
// console.log(res);
// const result = convertBinaryToString(res);
// console.log(result);

export default generateBinary;
