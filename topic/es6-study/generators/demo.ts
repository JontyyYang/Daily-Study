function* infiniteAdd() {
  let u = 10;
  while (u) {
    yield u--;
  }
}

const iterator = infiniteAdd();
while (true) {
  const res = iterator.next();
  console.log(res);
  if (res.done === true) {
    break;
  }
}

console.log('_____________________________________');

function* idMaker() {
  let index = 0;
  while (index < 3) {
    yield index++;
  }
}
const gen = idMaker();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
