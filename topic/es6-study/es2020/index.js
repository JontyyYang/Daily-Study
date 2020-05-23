// 类的私有字段
// 在es6中，我们可以通过 proxy 来拦截私有字段， 比如当 get 的时候， 判定所有以 _ 开头的都是私有类型，不准外部访问
// 卧槽？ 本地运行不起来。折腾了下，发现如果不用babel编译，那么需要node版本12以上，或者新的浏览器才行
class Counter {
  #x = 0;
  increment() {
    this.#x++;
  }
  decreament() {
    this.#x--;
  }
  getNum() {
    return this.#x;
  }
}

const counter = new Counter();
console.log(counter.getNum());
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getNum());
counter.decreament();
console.log(counter.getNum());

// 重点在这里， 直接访问私有变量会报错，而且try catch无效，日
// try {
//   console.log(counter.#x);
// } catch (e) {
//   console.log(e);
// }

// try {
//   throw new Error("123");
// } catch (e) {
//   console.log(e);
// }

console.log(2);

// 可选链运算符
// 当访问对象的深层嵌套属性，必须通过很长的布尔表示是去检查每个嵌套级别的属性（lodash中的get也可以做到），必须检查每个级别中定义的属性，直到所需的那层

const obj = {
  prop1: {
    prop2: {
      prop3: {
        prop4: {
          prop5: 5,
        },
      },
    },
  },
};

let res =
  obj.prop1 &&
  obj.prop1.prop2 &&
  obj.prop1.prop2.prop3 &&
  obj.prop1.prop2.prop3.prop4 &&
  obj.prop1.prop2.prop3.prop4.prop5;
console.log(res, 'res');

// 如果其中任何一个属性不存在， 并且不检测， 那么久会报错， 因为是不能访问undefined下的属性的
const obj2 = {
  prop1: {
    prop2: {
      prop4: {
        prop5: 5,
      },
    },
  },
};
let res2;
try {
  res2 = obj2.prop1.prop2.prop3.prop4.prop5;
} catch (e) {
  console.log(e);
}
console.log(res2, 'res2');

// 可选链就是遇到undefined或者null会直接返回undefined，比如
// ps 这里需要babel编译， 直接运行，哪怕是node也不支持
// console.log(obj?.prop1?.prop2?.prop3?.prop4?.prop5);
// console.log(obj2?.prop1?.prop2?.prop3?.prop4?.prop5);

// 空位合并运算符
// ps 这里需要babel编译， 直接运行，哪怕是node也不支持
// 如果我们想要的变量为undefined或者null的时候， 那么必须给变量设置默认值，比如
const y = x || 500;
// 当使用默认值的时候，所有类似于0或者false或者空字符串都会被默认值给取代。，
// 为了解决这个问题， 出现了一个nullish合并运算符用？？表示，我们仅在第一项为null或者undefined的时候设置默认值，
const yy = x ?? 500;
// 比如 下面的代码
const xxx = null;
const yyy = xxx ?? 500;
console.log(yyy); // 500
const n = 0;
const m = n ?? 9000;
console.log(m); // 0
// y 将被分配的值为 500，因为 x 的值为 null。但是，由于 n 不为 null 或 unfined，因此 m 被赋予值为 0。如果我们使用 || 而不是 ??，那么由于 0 为假，因此将为 m 赋值 9000。

// BigInt
// 用来表示大于2^53-1的整数，可以通过常规操作，进行加减乘除，余数，暂时业务中用不到， 我们大数全部依赖bigjs来处理

// 总结
// 我们可以使用 # 号来表示私有类变量。这样就不必用闭包来隐藏我们不想暴露给外界的私有变量。
// 为了解决对象中 null 和 undefined 值的问题，我们提供了可选链运算符来访问属性，而无需检查每个级别可能是 null 还是 undefined。
// 使用无效的合并运算符，我们只能为变量为 null 或 undefined 的情况设置默认值。
// 使用 BigInt 对象，我们可以用 JavaScript 表示超出常规数字安全范围的大数字，并对其执行标准操作，只是小数部分将从结果中省略。
