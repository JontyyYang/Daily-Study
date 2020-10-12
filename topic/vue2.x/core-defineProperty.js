const oldArray = Array.prototype;
const newArray = Object.create(oldArray);

['push', 'pop'].forEach(method => {
  newArray[method] = function () {
    console.log('yangjinda');
    // 切片编程
    // 函数劫持， 重写函数， 内部继续调用原有方法
    oldArray[method].call(this, ...arguments);
  };
});

// 触发获取事件
const observerSet = (key, value) => {
  console.log('触发设置事件，设置的键是', key, '设置的值是', value);
};

// 触发get事件
const observerGet = (key, value) => {
  console.log('触发获取事件，获取的键是', key, '获取的值是', value);
};

// 对对象增加监听能力
const defineReactive = (target, key, value) => {
  // 这行代码是为了data2里面的深层次的引用
  // 所以vue2的效率比较低就是因为递归 【大对象处理】
  observe(value);
  Object.defineProperty(target, key, {
    get() {
      observerGet(key, value);
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        // 这里是为了处理 直接复制一个对象， 这个新的对象不受监控
        observe(newValue);
        observerSet(key, newValue);
        value = newValue;
      }
    },
  });
};

// 监听对象
const observe = target => {
  // 去除异常情况
  if (typeof target !== 'object' || target === null) {
    return;
  }

  // 如果是数组，就劫持
  if (Array.isArray(target)) {
    target.__proto__ = newArray;
  }

  // 遍历属性
  for (let key in target) {
    defineReactive(target, key, target[key]);
  }
};

// 测试绑定对象改变时候触发事件
let data = {name: 'jontyy'};
observe(data);
data.name;
data.name = 'newJontyy';
console.log('----------------------------------------------------');
console.log();
console.log();

// 测试深层对象触发事件
let data2 = {
  name: 'jontyy2',
  extra: {
    age: 18,
  },
};

observe(data2);
data2.extra.age = 23;
console.log('----------------------------------------------------');
console.log();
console.log();

// 测试直接修改对象
data2.extra = {age: 24};
data2.extra.age = 5;
console.log('----------------------------------------------------');
console.log();
console.log();

// 测试数组一些方法
let data3 = {
  name: 'jontyy3',
  extra: {
    class: [1, 2, 3],
  },
};
observe(data3);

data3.extra.class[0] = 9;

data3.extra.class.push(4);
console.log(data3.extra.class);
console.log();
console.log();
data3.extra.class[0] = 9;
data3.extra.class[3] = 9;
console.log(data3);
