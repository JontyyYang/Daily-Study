const pkg = require('./pkg.json').clientDevDependencies;
const pkg2 = require('./pkg2.json').devDependencies;

const pick = (object: any, props: any[]) => {
  const Obj = {} as any;
  props.forEach(item => {
    if (object[item]) {
      Obj[item] = object[item];
    }
  });
  return Obj;
};

const isEqual = (value: any, other: any) => {
  const one = Object.keys(value);
  const another = Object.keys(other);

  if (one.length !== another.length) {
    return false;
  }

  for (let i = 0, j = another.length; i !== j; i++) {
    if (value[another[i]] !== other[another[i]]) {
      return false;
    }
  }

  return true;
};

// console.log(pick(pkg2, Object.keys(pkg)));

console.log(isEqual(pick(pkg2, Object.keys(pkg)), pkg));

export {};
