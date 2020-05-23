// proxy 测试

var person = {
  name: 'jontyy',
  age: 18,
  addAge() {
    return age + 1;
  },
};

var proxy = new Proxy(person, {
  get: function (target, ProxyKey) {
    if (ProxyKey in target) {
      console.log(`触发了get函数,获取的键是${ProxyKey}值是${target[ProxyKey]}`);
      return target[ProxyKey];
    } else {
      try {
        throw new Error(`该属性不存在,求得键是${ProxyKey}`);
      } catch (e) {
        console.log(e);
      }
    }
  },
});

// 测试get方法
proxy.name;
proxy.hhh;

// 测试get方法的继承
let getPrototype = Object.create(proxy);
getPrototype.age;
getPrototype.hhh;

//  get实现链式调用

const double = n => n * 2;
const pow = n => n * n;
const reverseInt = n => n.toString().split('').reverse().join('') | 0;

const pipe = (() => {
  // value === 3
  return value => {
    let funcStack = [];
    let oproxy = new Proxy(
      {},
      {
        get: (pipeObject, fnName) => {
          // get进入到这里
          if (fnName === 'get') {
            console.log(funcStack);
            // 挨个执行，限制性double
            return funcStack.reduce((val, fn) => {
              console.log(fn);
              return eval(fn + '(' + val + ')');
              // 下面的value是初始值，也就是reduce的第一个参数，val
            }, value);
          }
          // 第一次塞进去的是，double， 然后是pow，然后是reversInt，然后到了if里面
          // const let是块级作用域， 如果把上面的函数改为const。 那么下面的window[fnName]就取不到值， 因为window下面没有这个属性
          // 如果只用fnName ，那么就是个字符串，eval才能调用，这样不合理。而且， const 和 let就是为了解决这种作用域不合理的问题的，
          // 所以这段代码主要是为了演示，而不是为了实践
          funcStack.push(fnName);
          return oproxy;
        },
      }
    );

    return oproxy;
  };
})();

console.log(pipe(3).double.pow.reverseInt.get); // 63

const dom = new Proxy(
  {},
  {
    get(target, propsKey) {
      // 返回一个函数，很明显可以看到  dom.div  dom.a都是函数， attrs和children都是参数，
      return (attrs = {}, ...children) => {
        const el = document.createElement(propsKey);
        for (let key of Object.keys(attrs)) {
          el.setAttribute(key, attrs[key]);
        }
        for (let child of children) {
          if (typeof child === 'string') {
            child = document.createTextNode(child);
          }
          el.appendChild(child);
        }
        return el;
      };
    },
  }
);

const el = dom.div(
  {},
  '这是第一个题目',
  dom.a({href: 'www.baidu.com'}, 'sda'),
  '这是标题的链接',
  dom.ul({}, dom.li({}, '标题1'), dom.li({}, '标题1'), dom.li({}, '标题1'))
);
document.body.appendChild(el);

// 这里以为和es6文档不同， 返回的是false,后来发现是我写错了，哈哈哈哈
const proxy2 = new Proxy(
  {},
  {
    get: function (target, propsKey, receiver) {
      console.log(receiver);
      return receiver;
    },
  }
);

// 可以用es6新出的方法判断是否相等
console.log(Object.is(proxy2.getReceiver, proxy2));
// console.log(proxy2.getReceiver === proxy2);

const validator = {
  set: function (obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        console.log('年龄数值有问题，不是整数');
      } else if (value > 100) {
        console.log('年龄不能大于100岁呀');
      } else {
        console.log('设置年龄生效');
        obj.prop = value;
      }
    }
  },
};

const proxy3 = new Proxy({}, validator);
proxy3.age = 1;
proxy3.age = 1.3;
proxy3.age = 139;

const privateValidate = name => {
  if (Object.is(name[0], '_')) {
    return false;
  } else {
    return true;
  }
};
const privareHandle = {
  get: function (target, propsKey) {
    if (privateValidate(propsKey)) {
      console.log('成功取到值是', target[propsKey]);
      return target[propsKey];
    } else {
      console.log('目标是一个私有制，是不可以拿到的');
    }
  },
  set: function (target, propsKey, value) {
    if (privateValidate(propsKey)) {
      console.log('设置一个普通值成功');
      target[propsKey] = value;
      return true;
    } else {
      console.log('私有值是不可以被设置的');
      return false;
    }
  },
};

const proxy4 = new Proxy({}, privareHandle);
proxy4.name = 'yjd';
proxy4._age = 18;
proxy4._a;
proxy4.name;

const testReceiverHandle = {
  set: function (target, propsKey, value, receiver) {
    target.propsKey = receiver;
  },
};

const proxy5 = new Proxy({}, testReceiverHandle);
proxy5.name = '213';
console.log(Object.is(proxy5.name, proxy5));

const applyHandle = {
  apply: function (target, ctx, args) {
    console.log(ctx);
    return target(...args);
  },
};
const testApplyFunc = (obj1, obj2) => {
  return Number.parseInt(obj1) + Number.parseInt(obj2);
};
const applyObj = {
  testApplyFunc,
};
const proxy6 = new Proxy(applyObj.testApplyFunc, applyHandle);
console.log(proxy6(1, 23));

const twiceHandle = {
  apply(target, propsKey, args) {
    return Reflect.apply(...arguments) * 2;
  },
};
const sum = (left, right) => {
  // return 0;
  return Number.parseInt(left) + Number.parseInt(right);
};

const proxy7 = new Proxy(sum, twiceHandle);
console.log(proxy7(1, 3));

const hasHandle = {
  has(target, propsKey) {
    if (Object.is(propsKey[0], '_')) {
      return false;
    } else {
      return target[propsKey];
    }
  },
};

const obj8 = {
  name: 'yjd',
  _age: 18,
};

const proxy8 = new Proxy(obj8, hasHandle);
console.log('name' in proxy8);
console.log('_age' in proxy8);

const hasHandleFalse = {
  has(target, propsKey) {
    return false;
  },
};
const obj9 = {
  name: 'jontyy',
};
Object.preventExtensions(obj9);
const proxy9 = new Proxy(obj9, hasHandleFalse);
try {
  console.log('name' in proxy9);
} catch (e) {
  console.log(e);
}

console.log(double, pow, reverseInt, target, propsKey, args);
