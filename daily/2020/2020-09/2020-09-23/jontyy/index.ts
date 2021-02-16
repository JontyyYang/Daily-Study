const newPromise = () => {
  return new Promise(res => {
    setTimeout(() => {
      console.log('test');
      res(1);
    }, 1000);
  });
};

const testAwait = async () => {
  for (let i = 0; i !== 3; i++) {
    console.log(i);
    await newPromise();
  }
};

testAwait();
export {};
