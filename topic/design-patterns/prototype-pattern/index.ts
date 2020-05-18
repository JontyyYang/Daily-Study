
interface PersonType {
  // test
  testBasicType:number,
  // test
  testObject:{targetKey:string},
  name:string,
  eat:()=>number,
  sing:()=>void
}

const Person = function(this: PersonType, name:string) {
  this.name = name
} as any as {new (name:string):PersonType}

Person.prototype.eat = function() {
  return 1;
}

Person.prototype.sing = function() {
  console.log(this.name + '歌唱中')
}

Person.prototype.testBasicType = 1;
Person.prototype.testObject = { targetKey: "targetKey" };

const person = new Person('jontyy')
const person2 = new Person('晨晓')

console.log(person.eat())

person.sing()

console.log(person2.eat());

person2.sing();


console.log(person.testBasicType);
person.testBasicType = 2;
console.log(person.testBasicType);
console.log(person2.testBasicType);

console.log(person.testObject);
person.testObject.targetKey = "newKey";
console.log(person.testObject);
console.log(person2.testObject);



export {}