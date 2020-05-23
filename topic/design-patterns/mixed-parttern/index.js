'use strict';
const Person = function (name) {
  this.name = name;
  this.eat = () => {
    console.log(this.name + ' ' + 'eat1');
  };
};
Person.prototype.sing = function (content) {
  return this.name + content;
};
const jontyy = new Person('jontyy');
jontyy.eat();
console.log(jontyy.sing('内容'));
