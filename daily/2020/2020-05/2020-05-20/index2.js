"use strict";
/*
 * @Author: jontyy
 * @Date: 2020-05-20 22:46:49
 * @Description:
 */
const promise = new Promise((resolve, reject) => {
    console.log(3);
    setTimeout(() => {
        resolve(1);
    }, 3000);
}).then((res) => console.log(res));
promise;
// function timeout(ms:number) {
//   console.log(1)
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, "done");
//   });
// }
// timeout(3000).then((value) => {
//   console.log(value);
// });
