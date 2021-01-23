const obj = {
  name: 'yjd',
  age: 19,
};

const proxy = (param: any) => {
  return new Proxy(param, {
    get: (target, property, receiver) => {
      console.log(target, 'target');
      return Reflect.get(target, property, receiver);
    },
    set: (target, key, value, receiver) => {
      console.log(target, key, value);
      return Reflect.set(target, key, value);
    },
  });
};

const test = proxy(obj);

test.name;
test.age = 3;
