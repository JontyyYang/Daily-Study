const simple: (foo: number) => string = foo => foo.toString();

console.log(simple(3));

const demo: (foo: number) => string = function (foo) {
  return foo.toString();
};

console.log(demo(3));

export {};
