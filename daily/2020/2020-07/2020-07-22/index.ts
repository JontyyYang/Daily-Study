//@ts-nocheck
/*eslint-disable*/
const path = require('path');
const package = require(path.join(__dirname, '../package.json'));
const fs = require('fs');
const {isEqual} = require('lodash');

const {clientDevDependencies = {}} = package;

const versionJsonPath = path.join(__dirname, './version.json');

const list = Object.keys(clientDevDependencies).reduce((result, package) => {
  const version = clientDevDependencies[package];
  result.push(`${package}@${version}`);
  return result;
}, []);

if (fs.existsSync(versionJsonPath)) {
  const beforeVersion = fs.readFileSync(versionJsonPath, 'utf-8');
  const needYarn = !isEqual(JSON.parse(beforeVersion), clientDevDependencies);
  if (needYarn) {
    fs.writeFileSync(versionJsonPath, JSON.stringify(clientDevDependencies));
    console.log(list.join(' '));
  } else {
    console.log('');
  }
} else {
  console.log(list.join(' '));
  fs.writeFileSync(versionJsonPath, JSON.stringify(clientDevDependencies));
}

export {};