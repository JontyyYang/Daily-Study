import fs = require('fs');

// 这是正常的加载js文件的
const loadJsonFile = (filename: string): string => {
  return JSON.parse(fs.readFileSync(filename).toString());
};

console.log(loadJsonFile('./data.json'));

// // 加载不存在的文件和格式错误的文件都会抛出来错误的
// try {
//   console.log(loadJsonFile('./wrongPosition.json'));
// } catch (e) {
//   console.log(e);
// }

// try {
//   // 这里随便新建一个错误的json文件就行，我这边lint太强了，导致不能新建
//   console.log(loadJsonFile('./wrang.json'));
// } catch (e) {
//   console.log(e);
// }

const promise = new Promise((resolve, reject) => {
  resolve(123);
})
  .then(res => {
    console.log(res);
  })
  .catch(e => {
    console.log(e);
  });

const promise2 = new Promise((resolve, reject) => {
  reject(new Error('wrong'));
})
  .then(res => {
    console.log(res);
  })
  .catch(e => {
    console.log(e);
  });

const delay = (time: number) => {
  new Promise(resolve =>
    setTimeout(() => {
      resolve(1);
      console.log('jotnyy');
    }, time)
  );
};

delay(1000);

const coolLoadJsonFile = (filename: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const data = fs.readFileSync(filename);
    if (data) {
      resolve(data.toString());
    } else {
      reject();
    }
  }).then(res => {
    return JSON.parse(res as string);
  });
};

coolLoadJsonFile('./data.json')
  .then(val => {
    console.log(val, 'val');
  })
  .catch(e => {
    console.log(e, 'e');
  });
