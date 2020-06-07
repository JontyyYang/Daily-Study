'use strict';
exports.__esModule = true;
// 测试
var Person = function (age) {
  this.age = age;
  // this.growOld = () => {
  //   this.age++;
  // };
};
Person.prototype.growOld = function () {
  this.age++;
};
var person = new Person(18);
console.log(person);
person.growOld();
var addAge = person.growOld;
setTimeout(function () {
  // person.growOld();
  addAge();
}, 1000);
setTimeout(function () {
  console.log(person);
}, 1000);
