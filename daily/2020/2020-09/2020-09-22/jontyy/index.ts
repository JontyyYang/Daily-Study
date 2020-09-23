import generateBinary from './common';

const originStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const binaryStr = generateBinary(originStr);
console.log(binaryStr);

// 理论上，浏览器环境， 可以直接使用window下面的方法， atob和btoa两个方法实现base和binary的转换
// 分别是 binary to ascii 和  ascii to binary
// 但是由于我代码写的是export。 tsc生成的 在node端是支持的， 在浏览器是不支持的，所以要重写代码，懒，就美女拍卖行
// console.log(btoa(binaryStr));

// 这是node 端的
const res1 = Buffer.from('123').toString('base64');
const res2 = Buffer.from('MTIz', 'base64').toString();
console.log(res1, res2);

export {};
