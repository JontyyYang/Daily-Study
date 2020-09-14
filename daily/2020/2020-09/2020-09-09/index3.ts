const getRes = (url: string): Promise<string> => {
  return new Promise(resolve => {
    const random = Math.random() * 100;
    setTimeout(() => {
      resolve(url);
    }, random);
  });
};

const multiRequest = (urls: string[], maxNum: number) => {
  return new Promise(resolve => {
    const promise = new Promise(r => (resolve = r));

    const ret: Promise<any>[] = [];
    let i = 0;

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
  });
};

multiRequest(['1', '2', '3', '4', '5', '6', '7', '8', '9'], 5);

export {};
