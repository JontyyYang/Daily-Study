import fs = require('fs');
import path = require('path');

const basicUrl = './daily';

const createFile = (): void => {
  // 获取当前年月日
  const date = new Date();
  const Year = date.getFullYear();
  const Month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;

  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;

  // 查看是否有今年的文件夹，如果没有，新建
  try {
    fs.accessSync(`${basicUrl}/${Year}`);
  } catch (e) {
    fs.mkdirSync(path.join(__dirname, '../', `${basicUrl}/${Year}`));
  }

  // 查看是否有当月文件夹，如果没有，新建
  try {
    fs.accessSync(`${basicUrl}/${Year}/${Year}-${Month}`);
  } catch (e) {
    fs.mkdirSync(path.join(__dirname, '../', `${basicUrl}/${Year}/${Year}-${Month}`));
  }

  // 查看是否有当天文件夹，如果没有，新建
  try {
    fs.accessSync(`${basicUrl}/${Year}/${Year}-${Month}/${Year}-${Month}-${day}`);
  } catch (e) {
    fs.mkdirSync(
      path.join(__dirname, '../', `${basicUrl}/${Year}/${Year}-${Month}/${Year}-${Month}-${day}`)
    );
  }

  // 查看是否有ts文件，如果有，新增ts文件
  try {
    fs.accessSync(`${basicUrl}/${Year}/${Year}-${Month}/${Year}-${Month}-${day}/index.ts`);
    console.log('已经存在index.ts文件，请手动新建需要的文件');
  } catch (e) {
    fs.writeFileSync(
      path.join(
        __dirname,
        '../',
        `${basicUrl}/${Year}/${Year}-${Month}/${Year}-${Month}-${day}/index.ts`
      ),
      'export {}'
    );
    fs.writeFileSync(
      path.join(
        __dirname,
        '../',
        `${basicUrl}/${Year}/${Year}-${Month}/${Year}-${Month}-${day}/daily.md`
      ),
      ''
    );
  }
};

createFile();
