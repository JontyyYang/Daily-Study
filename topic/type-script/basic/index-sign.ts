interface Foo {
  [key: string]: number;
  x: number;
}

const foo: Foo = {
  x: 3,
  y: 4,
};

console.log(foo);
console.log(foo.y);
console.log(foo.x);
const x = 'x';
console.log(foo[x]);

console.log('--------------------------------------');

type Index = 'a' | 'b' | 'c';
type FromIndex = {[key in Index]?: number};

const good: FromIndex = {
  b: 1,
  c: 2,
};

const good2: FromIndex = {
  b: 3,
  d: 5,
};
export {};
