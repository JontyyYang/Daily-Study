// 1.有时候需要将二进制图片文件 转base64
const b = Buffer.from('woshidashuaige'); //buffer 是js里面专门存放二进制的缓存区，暂时理解创建一个二进制变量
const s = b.toString('base64');
console.log('b', b);
console.log('s', s);

// 字符串转base64
// const encodedData = btoa('this is a example');
// console.log(encodedData); // dGhpcyBpcyBhIGV4YW1wbGU=

// base64转字符串
// const decodeData = window.atob(encodedData);
// console.log(decodeData); // this is a example

// 常见的使用base64的场景
// 怎么转成base64的??  在线的吧
//在css中使用base64图片
// .header {
//   background-image: url(data:image/png;base64,iVBORw0...);
// }

//在html中使用base64图片
// <img src="data:image/gif;base64,base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gIcSUNDX1BST0ZJTEUAAQE.....>

// -----------------------------------------分割线------------------------------------------------------
// 2.求多个数组之间的交集
const one = [1, 2, 3, 4, 5];
const two = [4, 5, 6, 7, 8];
// 交集
const jiaoji = one.filter(v => two.includes(v));
console.log('jiaoji', jiaoji);

// 并集
const binji = one.concat(two.filter(v => !one.includes(v)));
console.log('binji', binji);
// 差集
const chaji = one.concat(two).filter(v => !(one.includes(v) && two.includes(v)));
console.log('chaji', chaji);

// -----------------------------------------分割线------------------------------------------------------
// 3.将'10000000000'形式的字符串，以每3位进行分隔展示'10.000.000.000',多种实现方式
const str = '10000000000.892736718';
// /g全局匹配  \. 匹配到.结束
const ss = str.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

console.log('ss', ss);

export {};
