// @ts-ignore
// const fn = (...args) => {
//   for (const arg of args) {
//     console.log(arg);
//   }
// };
// const [a, b] = [1, 2];
// fn`${a} + ${b} = ${a + b}`;

// setTimeout(() => {
//   console.log(11111111111);
// }, 0);

// const promise = new Promise((resolve, reject) => {
//   console.log(2);
//   reject(3);
//   console.log(4);
// });

// promise
//   .then(() => console.log(5))
//   .catch(() => console.log(6))
//   .then(() => console.log(7))
//   .catch(() => console.log(8))
//   .then(() => console.log(9));
// console.log(10);

const p = {
  _age: 18,
  get age() {
    console.log(this._age);
    return this._age;
  },
  set age(val) {
    console.log(this._age, 'se');

    this._age = val;
  },
};
p.age; // 18
p.age = 20; // 20
p.age;

export {};
