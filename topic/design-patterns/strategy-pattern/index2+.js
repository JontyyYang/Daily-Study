var registerForm = document.getElementById('registerForm');
var strategies = {
  isNonEmpty: function (value, errorMsg) {
    if (value === '') {
      return errorMsg;
    }
  },
  minLength: function (value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
  },
  isMobile: function (value, errorMsg) {
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg;
    }
  },
};
var Validator = function () {
  this.cache = [];
};
Validator.prototype.add = function (dom, rule, errorMsg) {
  var ruleArray = rule.split(':');
  this.cache.push(function () {
    var strategy = ruleArray.shift();
    ruleArray.unshift(dom.value);
    ruleArray.push(errorMsg);
    // @ts-ignore:
    return strategies[strategy].apply(dom, ruleArray);
  });
};
Validator.prototype.start = function () {
  var validataFunc;
  for (var i = 0; (validataFunc = this.cache[i]); i++) {
    var msg = validataFunc();
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
var validataFunc = function () {
  var validator = new Validator();
  // @ts-ignore:
  validator.add(registerForm.userName, 'isNonEmpty', '用户名不能为空');
  // @ts-ignore:
  validator.add(registerForm.password, 'minLength:6', '密码长度不能少于6 位');
  // @ts-ignore:
  validator.add(registerForm.phoneNumber, 'isMobile', '手机号码格式不正确');
  var errorMsg = validator.start();
  return errorMsg;
};
// @ts-ignore:
registerForm.onsubmit = function () {
  var errorMsg = validataFunc(); // 如果errorMsg 有确切的返回值，说明未通过校验
  if (errorMsg) {
    alert(errorMsg);
    return false; // 阻止表单提交
  } else {
    console.log(12);
    return false;
  }
};
// @ts-ignore:
