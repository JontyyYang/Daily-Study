const getRes = (url: string) => {
  return new Promise(resolve => {
    const random = Math.random() * 100;
    setTimeout(() => {
      resolve({url, random});
    }, random);
  });
};

const multiRequest = (urls: string[], maxNum: number): Promise<Array<string>> => {
  // 执行队列
  const ret: Promise<any>[] = [];
  let i = 0,
    resolve: () => void;

  const promise = new Promise(r => (resolve = r));

  const addTask = () => {
    if (i >= urls.length) {
      return resolve();
    }

    const task = getRes(urls[i++])
      .then(res => {
        console.log(res);
        return res;
      })
      .finally(() => {
        addTask();
      });

    ret.push(task);
  };

  while (i < maxNum) {
    addTask();
  }

  return promise.then(() => Promise.all(ret));
};

multiRequest(['1', '2', '3', '4', '5', '6', '7', '8', '9'], 5);

// multiRequest(['123'], 3);

export default multiRequest;
