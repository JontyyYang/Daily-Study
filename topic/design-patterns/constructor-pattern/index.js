// 这里是不可以设置为箭头函数的， 因为箭头函数式不可以作为构造函数使用的
// 箭头函数默认绑定this为父级的this，这里就是window
function Jontyy(name, age) {
  this.name = name;
  this.age = age;
  this.sleep = () => {
    console.log(this.name + "我只想睡觉");
  };
}

// 普通函数和构造函数唯一的区别在于他们的调用方式不同， 当做构造函数，需要用new，this指向新的实例， 当做普通函数， 那么this指向window

var jontyy = new Jontyy("jontyy", 18);

console.log(jontyy);

console.log(jontyy instanceof Object);

console.log(jontyy instanceof Jontyy);

console.log(Jontyy.prototype.constructor === Jontyy);

Jontyy.test = 1;

console.log(Jontyy.prototype.constructor);
