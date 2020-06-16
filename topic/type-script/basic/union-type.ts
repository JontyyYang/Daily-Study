// 联合类型
function extend<T, U>(first: T, second: U): T & U {
  const result = <T & U & ObjectConstructor>{};

  for (const id in first) {
    (<T>result)[id] = first[id];
  }

  for (const id in second) {
    if (!result.hasOwnProperty(id)) {
      (<U>result)[id] = second[id];
    }
  }
  return result;
}

const x = extend({a: 'hello'}, {b: 42});
console.log(x.a);
console.log(x.b);

// 元组
const nameNUmberType: [number, string] = [18, 'jontyy'];
const [age, name] = nameNUmberType;
console.log(age, name);

// 类型别名， 也就是type

type strOrNum = string | number;
const sample: strOrNum = 92626;
console.log(sample);

export {};
