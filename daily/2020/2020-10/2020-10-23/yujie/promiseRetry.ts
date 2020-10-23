const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('server unavailable');
    }, 500);
  });
};

const retry = (fn: {(): Promise<unknown>; (): Promise<unknown>}, times: number, delay: number) => {
  return new Promise((resolve, reject) => {
    const attempt = () => {
      fn()
        .then(resolve)
        .catch((err: unknown) => {
          console.log(`Attempt #${times} failed`);
          if (times === 0) {
            reject(err);
          } else {
            times--;
            setTimeout(() => {
              attempt();
            }, delay);
          }
        });
    };

    attempt();
  });
};

retry(fetchData, 3, 100);
