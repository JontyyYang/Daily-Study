interface PersonType {
  name: string;
  eat: () => void;
  sing: (content: string) => string;
}

const Person = (function (this: PersonType, name: string) {
  this.name = name;
  this.eat = () => {
    console.log(this.name + ' ' + 'eat1');
  };
} as any) as {
  new (name: string): PersonType;
};

Person.prototype.sing = function (content: string) {
  return this.name + content;
};

const jontyy = new Person('jontyy');
jontyy.eat();
console.log(jontyy.sing('内容'));

export {};
