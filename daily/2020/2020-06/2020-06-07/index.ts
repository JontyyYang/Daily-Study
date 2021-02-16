// 限制使用undefined
const a = Math.random();
function foo() {
  if (a > 0.5) {
    return {a: 1, b: 2};
  } else {
    return {a: 1, b: undefined};
  }
}

console.log(foo());

// 上面的并不是一个好方法

function goodFoo(a: number): {a: number; b?: number} {
  if (a > 0.5) {
    return {a: 1, b: 2};
  } else {
    return {a: 1};
  }
}
console.log(goodFoo(a));

const test = () => {
  console.log(1);
  return 1;
};

// 给出来的建议就是有可能返回undefined的时候，我们可以通过返回类型来控制
export {foo, goodFoo, test};
