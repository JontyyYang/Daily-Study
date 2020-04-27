// 这里是不可以设置为箭头函数的， 因为箭头函数式不可以作为构造函数使用的
// 箭头函数默认绑定this为父级的this，这里就是window
function Jontyy(name, age) {
  this.name = name;
  this.age = age;
  this.sleep = () => {
    console.log(this.name + "我只想睡觉");
  };
}

var jontyy = new Jontyy("jontyy", 18);
console.log(jontyy);
