'use strict';
exports.__esModule = true;
var getRes = function (url) {
  return new Promise(function (resolve) {
    var random = Math.random() * 100;
    setTimeout(function () {
      resolve({url: url, random: random});
    }, random);
  });
};
var multiRequest = function (urls, maxNum) {
  // 执行队列
  var ret = [];
  var i = 0,
    resolve;
  var promise = new Promise(function (r) {
    return (resolve = r);
  });
  var addTask = function () {
    if (i >= urls.length) {
      return resolve();
    }
    var task = getRes(urls[i++])
      .then(function (res) {
        console.log(res);
        return res;
      })
      ['finally'](function () {
        addTask();
      });
    ret.push(task);
  };
  while (i < maxNum) {
    addTask();
  }
  return promise.then(function () {
    return Promise.all(ret);
  });
};
multiRequest(['1', '2', '3', '4', '5', '6', '7', '8', '9'], 5);
// multiRequest(['123'], 3);
exports['default'] = multiRequest;
