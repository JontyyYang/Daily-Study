import fs = require('fs');

// 计算准确版本号
const current = (version: string): string => {
  const versionArray = version.substr(1, version.length - 2).split('.');
  return versionArray.splice(0, 3).join('.');
};

// 计算changelog内容
const changelogContent = (item: any, name: string) => {
  const tagReg = new RegExp(`-\\s:${name}:\\s\\S{2,}`, 'g');
  const tag = new RegExp(`-\\s:${name}:\\s`, 'g');
  const tagArray = item.match(tagReg) as string[];
  const tagItem = tagArray && tagArray.map(item => item.replace(tag, ''));
  return tagItem;
};

const run = () => {
  const readme = fs.readFileSync('./README.md').toString();

  const changelog = [] as any;

  const res = readme
    .split('##')
    .map(item => item.replace('\n\n', ` `))
    .map(item => item.replace('\n', ` `))
    .filter(item => item !== '');

  fs.writeFileSync('./res.js', `const readme = ${JSON.stringify(res)}`);

  const dataReg = /\d{4}-\d{2}-\d{2}/;
  const versionReg = /\[\d{1,2}.\d{1,2}.\d{1,2}(.\d{1,2})?\]/;

  res.forEach(item => {
    // 计算时间
    const dataTime = item.match(dataReg) as any;

    // 计算版本
    const version = item.match(versionReg) as any;
    const currentVersion = current(version[0]);

    const fixItem = changelogContent(item, 'fix') || [];
    const featItem = changelogContent(item, 'feat') || [];
    const changeItem = changelogContent(item, 'change') || [];
    const tempObj = {
      dataTime: dataTime[0],
      version: currentVersion,
      fixItem,
      featItem,
      changeItem,
    };

    changelog.push(tempObj);
  });

  return changelog;
};

const result = run();

fs.writeFileSync('./readme.js', `const readme = ${JSON.stringify(result)}`);

export {};
