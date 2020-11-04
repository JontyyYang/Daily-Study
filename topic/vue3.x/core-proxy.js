// vue 3.x 响应式原理

// 2.0的缺陷
// 1. 默认会递归
// 2. 数组不能监听全部属性， 比如length
// 3. 对象上原先不存在的属性时有问题的

// Reflect 的优点
// 设置，删除的结果有返回

let proxyMap = new WeakMap(); // 弱引用,放置的是原对象和代理对象的键值对
let proxyProxyMap = new WeakMap(); // 被代理过的对象和原对象的键值对

const getFunc = (target, key) => {
  console.log(
    `触发了get方法,原对象是  ${typeof target[key] === 'symbol' ? 'symbol' : target},键是${
      typeof key === 'symbol' ? 'symbol' : key
    }`
  );
};

const setFunc = (target, key, value) => {
  console.log(`触发了set方法,原对象是${target},键是${key}, 值是${value}`);
};

const deleteFunc = (target, key) => {
  console.log(`触发了delete方法,原对象是${target}, 键是${key}`);
};

// 第四步，实现这个判断是否是对象的方法
const isObject = obj => {
  return typeof obj === 'object' && obj !== null;
};

// 看一个对象上有没有这个属性
const isOwn = (obj, key) => {
  return obj.hasOwnProperty(key);
};

const createReactiveObject = target => {
  // 第三步， 需要区分这个是不是一个对象，如果不是对象， 不需要弄成响应式的
  if (!isObject(target)) {
    throw new Error('该目标不是对象， 无法设置成响应式');
    return;
  }

  // 如果已经代理过， 那么就直接返回代理过的结果
  let proxy = proxyMap.get(target);
  if (proxy) {
    return proxy;
  }

  let proxyProxy = proxyProxyMap.has(target);
  if (proxyProxy) {
    return target;
  }

  let handler = {
    // 参数分别为原对象， 键和proxy实例
    // 第五步， 设置handle处理函数
    get: (target, key, receiver) => {
      // return target[key];
      // 上下等价， 上面为es5，下面为es6
      getFunc(target, key);

      // 收集依赖， 要把当前的key和effect对应起来

      const getResult = Reflect.get(target, key, receiver);
      // 通过get方法， 来解决多层代理的问题
      // 2.0的时候， 默认给每一层遍历。 绑定， 而3.0只有在有必要的时候才对子级绑定
      return isObject(getResult) ? reactive(getResult) : getResult;
    },

    set: (target, key, value, receiver) => {
      const oldValue = target[key];
      // 判断一个属性以前有没有
      if (!isOwn(target, key)) {
        console.log('原本没有的属性，更新视图');
        setFunc(target, key, value);
      } else if (oldValue !== value) {
        console.log('原本就有的属性，更新视图');
        setFunc(target, key, value);
      } else {
        console.log('原本就有的属性并且原先就有的属性，不更新视图');
      }
      // 这个存在一个问题， 当这个对象不可以被写的时候， 不会报错， 上层感知不到
      // target[key] = value;
      // Reflect。set可以看到是否设置成功
      const isSetSuccess = Reflect.set(target, key, value, receiver);
      console.log('是否设置成功=', isSetSuccess, '设置的键值对是', key, value);
      return isSetSuccess;
    },

    deleteProperty: (target, key) => {
      deleteFunc(target, key);
      const isDeleteSuccess = Reflect.deleteProperty(target, key);
      console.log('是否删除成功=', isDeleteSuccess, '删除的键是', key);
      return isDeleteSuccess;
    },
  };

  // 这里可以通过上层不符合条件的直接return掉， 避免else
  let observed = new Proxy(target, handler);
  proxyMap.set(target, observed);
  proxyProxyMap.set(observed, target);

  return observed;
};

const reactive = target => {
  // 第二步，返回一个响应式的对象
  return createReactiveObject(target);
};

const data1 = {
  name: 'jontyy',
};
// 第一步， 在这里讲对象变为响应式的
let proxy = reactive(data1);
console.log('proxy.name的值是', proxy.name);
console.log();

proxy.name = 'yangjinda';
console.log('proxy.name的值是', proxy.name);
console.log();

delete proxy.name;
console.log('proxy.name的值是', proxy.name);
console.log();

const data2 = {};
Object.defineProperty(data2, 'name', {
  value: 'testWritable',
  enumerable: true,
  writeable: false,
});
let proxy2 = reactive(data2);
proxy2.name = 'test';
console.log();

delete proxy2.name;
console.log();

const data3 = [1, 2, 34, 5];
let proxy3 = reactive(data3);
proxy3.push(9);
console.log();

const data4 = {
  info: {
    age: 22,
  },
};
let proxy4 = reactive(data4);
// 不绑定的话， 他触发不了set
proxy4.info.age = 23;
console.log();

// 需要记录下一个对象代理过了， 就不要再次new了
const data5 = {
  name: 'jontyy',
};
let proxy5 = reactive(data5);
// 重复代理
reactive(data5);
reactive(data5);
// 代理代理过的对象
reactive(proxy5);
// 所以这里需要处理重复代理
proxy5.name = 'jontyYang';
console.log();

const data6 = [1, 2, 3];
let proxy6 = reactive(data6);
// 会调用两次get和set，分别是push和length
// get 获取 键是push
// get 获取length是3
// 然后set data6[3] = 4
// set length = 4
// 这样会导致调用两次试图更新， 所以我们这边需要屏蔽的能力
// 这里的问题就在于如果区分是新增属性[data6.length = 4]， 还是新增属性【data6[3]=4】
// 所以需要判断原来的对象上有没有这个key
proxy6.push(4);
console.log();
// 这样的是会修改的， 他只是屏蔽无意义的修改
proxy6.length = 100;
console.log();

// 依赖收集，发布订阅
const data7 = {name: 'jontyy'};
let proxy7 = reactive(data7);

proxy7.name = 'jontyYang';
