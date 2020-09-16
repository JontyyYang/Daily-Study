class myString extends String {
  myIndexOf(str: string) {
    const O = Object(this);
    const reg = new RegExp(str, 'g');
    const res = reg.exec(O);
    if (res) {
      return res.index;
    }
    return -1;
  }
}

const stringTest = new myString('abcdefg');

console.log(stringTest.myIndexOf('23'));
console.log(stringTest.myIndexOf('cde'));

export {};
