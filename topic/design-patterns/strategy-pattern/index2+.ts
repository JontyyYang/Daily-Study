/*
 * @Author: jontyy
 * @Date: 2020-05-25 20:21:46
 * @Description:
 */

// const strategies = {
//   isNonEmpty: function (value, errorMsg) {
//     // 不为空
//     if (value === '') {
//       return errorMsg;
//     }
//   },
//   minLength: function (value, length, errorMsg) {
//     // 限制最小长度
//     if (value.length < length) {
//       return errorMsg;
//     }
//   },
//   isMobile: function (value, errorMsg) {
//     // 手机号码格式
//     if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
//       return errorMsg;
//     }
//   },
// };

// const validataFunc = function () {
//   const validator = new Validator(); // 创建一个validator 对象
//   /***************添加一些校验规则****************/
//   validator.add(registerForm.userName, 'isNonEmpty', '用户名不能为空');
//   validator.add(registerForm.password, 'minLength:6', '密码长度不能少于6 位');
//   validator.add(registerForm.phoneNumber, 'isMobile', '手机号码格式不正确');
//   const errorMsg = validator.start(); // 获得校验结果
//   return errorMsg; // 返回校验结果
// };

// var registerForm = document.getElementById('registerForm');
// registerForm.onsubmit = function () {
//   const errorMsg = validataFunc(); // 如果errorMsg 有确切的返回值，说明未通过校验
//   if (errorMsg) {
//     alert(errorMsg);
//     return false; // 阻止表单提交
//   }
// };

// var Validator = function () {
//   this.cache = []; // 保存校验规则
// };

// Validator.prototype.add = function (dom, rule, errorMsg) {
//   const ary = rule.split(':'); // 把strategy 和参数分开
//   this.cache.push(function () {
//     // 把校验的步骤用空函数包装起来，并且放入cache
//     const strategy = ary.shift(); // 用户挑选的strategy
//     ary.unshift(dom.value); // 把input 的value 添加进参数列表
//     ary.push(errorMsg); // 把errorMsg 添加进参数列表
//     return strategies[strategy].apply(dom, ary);
//   });
// };

// Validator.prototype.start = function () {
//   for (var i = 0, validatorFunc; (validatorFunc = this.cache[i++]); ) {
//     const msg = validatorFunc(); // 开始校验，并取得校验后的返回信息
//     if (msg) {
//       // 如果有确切的返回值，说明校验没有通过
//       return msg;
//     }
//   }
// };

const strategies = {
  isNonEmpty: (value: string, errorMsg: string) => {
    if (value === '') {
      return errorMsg;
    }
  },

  minLength: (value: string, length: number, errorMsg: string) => {
    if (value.length < length) {
      return errorMsg;
    }
  },

  isMobile: (value: string, errorMsg: string) => {
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg;
    }
  },
};

interface ValidatorType {
  cache: [];
}

const Validator = (function (this: ValidatorType) {
  this.cache = [];
} as any) as {new (): void};

Validator.prototype.add = function (dom: HTMLInputElement, rule: string, errorMsg: string) {
  const ruleArray = rule.split(':');
  this.cache.push(() => {
    const strategy = ruleArray.shift();
    ruleArray.unshift(dom.value);
    ruleArray.push(errorMsg);
    return strategies[strategy].apply(dom, ruleArray);
  });

  // return strategies[]
};

const validataFunc = function () {
  const validator = new Validator();
  validator.add(registerForm.userName, 'isNonEmpty', '用户名不能为空');
};
