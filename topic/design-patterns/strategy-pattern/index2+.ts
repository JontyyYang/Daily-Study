const registerForm = document.getElementById('registerForm');

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
  add: (dom: HTMLFormElement, rule: string, errorMsg: string) => string | undefined;
  start: () => string | undefined;
}

const Validator = (function (this: ValidatorType) {
  this.cache = [];
} as any) as {new (): ValidatorType};

Validator.prototype.add = function (dom: HTMLFormElement, rule: string, errorMsg: string) {
  const ruleArray = rule.split(':');
  this.cache.push(() => {
    const strategy = ruleArray.shift();

    ruleArray.unshift(dom.value);
    ruleArray.push(errorMsg);
    // @ts-ignore:
    return strategies[strategy].apply(dom, ruleArray);
  });
};

Validator.prototype.start = function () {
  let validataFunc;
  for (let i = 0; (validataFunc = this.cache[i]); i++) {
    const msg = validataFunc();
    if (msg) {
      return msg;
    }
  }
  return undefined;
};

// 如果需要支持校验多种规则， 只需要把 add的第三个参数去掉， 第二个参数改为数组， 把原来的二三参数放到第二个中， 类似于
// [
//   {
//     strategy: 'isNonEmpty',
//     errorMsg: 'xxx',
//   },
//   {
//     strategy: 'isNonEmpty',
//     errorMsg: 'xxx',
//   },
// ];
// 然后在上面add中，一开始就加个循环， 挨个循环处理
const validataFunc = function () {
  const validator = new Validator();
  // @ts-ignore:
  validator.add(registerForm.userName, 'isNonEmpty', '用户名不能为空');
  // @ts-ignore:
  validator.add(registerForm.password, 'minLength:6', '密码长度不能少于6 位');
  // @ts-ignore:
  validator.add(registerForm.phoneNumber, 'isMobile', '手机号码格式不正确');
  const errorMsg = validator.start();
  return errorMsg;
};
// @ts-ignore:
registerForm.onsubmit = function () {
  const errorMsg = validataFunc(); // 如果errorMsg 有确切的返回值，说明未通过校验
  if (errorMsg) {
    alert(errorMsg);
    return false; // 阻止表单提交
  } else {
    console.log(12);
    return false;
  }
};
// @ts-ignore:
