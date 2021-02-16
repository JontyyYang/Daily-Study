// 防抖， 只要操作不停，函数就不执行
// 节流， 一段时间只会执行一次
// 防抖用于键盘输入触发实时搜索，或者resize
// 节流用于频繁表单提交

const throtter = (fn, delay) => {
  let lastTime = Date.now();

  return function () {
    let nowTimer = Date.now();
    let gapTime = nowTimer - lastTime;
    if (gapTime > delay) {
      fn.call(this);
      lastTime = nowTimer;
    }
  };
};

const debounce = (fn, delay) => {
  let timer = null;

  return function () {
    timer && clearTimeout(timer);
    let args = [...arguments];

    timer = setTimeout(() => {
      fn.call(this, args);
    }, delay);
  };
};

export {};
