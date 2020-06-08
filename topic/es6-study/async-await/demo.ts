// 构造一个promise
// 返回值是 Promise<number>  实际上对应的就是 resolve(count)
const delay = (milliseconds: number, count: number): Promise<number> => {
  return new Promise<number>(resolve => {
    setTimeout(() => {
      resolve(count + count);
    }, milliseconds);
  });
};

// 这里返回的promise  void  是指没有返回任何值，没有return
// 这里返回值不能使void，因为
// The return type of an async function or method must be the global Promise<T> type.
const dramaticWelcome = async (): Promise<void> => {
  console.log('Hello');
  for (let i = 0; i !== 5; i++) {
    const count: number = await delay(500, i);
    console.log(count);
  }
  console.log('world');
};

dramaticWelcome();
