
interface PersonType {
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

const person = new Person('jontyy')
const person2 = new Person('晨晓')

console.log(person.eat())

person.sing()

console.log(person2.eat());

person2.sing();

export {}