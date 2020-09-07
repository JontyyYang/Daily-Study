Promise.retry = function (fn, limit) {
  let i = 0;
  return new Promise((resolve, reject) => {
    function retry() {
      console.log('try!', i);
      fn()
        .then(res => {
          resolve();
        })
        .catch(err => {
          i++;
          if (i > limit - 1) {
            reject(err);
          } else {
            retry();
          }
        });
    }
    retry();
  });
};
Promise.retry(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve() : reject();
    }, 300);
  });
}, 5)
  .then(res => {
    console.log('resolve');
  })
  .catch(err => {
    console.log('reject');
  });
