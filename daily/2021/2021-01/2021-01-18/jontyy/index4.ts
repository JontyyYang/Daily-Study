// 实现一个简单的延时函数
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// 红灯亮 300 毫秒，换黄灯亮 200 毫秒，换绿灯亮 100 毫秒，再换红灯 ......
let light = ''; // red, yellow, green
async function execute() {
  while (true) {
    light = '红灯';
    await delay(300);
    light = '黄灯';
    await delay(200);
    light = '绿灯';
    await delay(100);
  }
}
async function doTest() {
  return new Promise((resolve, reject) => {
    try {
      execute();
      setTimeout(() => {
        console.log(light);
        resolve('通过');
      }, 400);
    } catch (ex) {
      resolve('通过');
    }
  });
}

doTest();

export {};
