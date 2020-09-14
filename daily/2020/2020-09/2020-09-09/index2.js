function multiRequest(urls, maxNum) {
  const ret = [];
  let i = 0;
  let resolve;
  const promise = new Promise(r => (resolve = r));
  const addTask = () => {
    if (i >= urls.length) {
      return resolve();
    }

    const task = request(urls[i++]).finally(() => {
      addTask();
    });
    ret.push(task);
  };

  while (i < maxNum) {
    addTask();
  }

  return promise.then(() => Promise.all(ret));
}

// 模拟请求
function request(url) {
  return new Promise(r => {
    const time = Math.random() * 1000;
    setTimeout(() => r(url), time);
  });
}

multiRequest([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 5);
