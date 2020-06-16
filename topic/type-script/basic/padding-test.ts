function padding(
  a: number,
  b?: number,
  c?: number,
  d?: number
): {aNum: number; bNum?: number; cNum?: number; dNum?: number} {
  let aNum = a;
  let bNum = b;
  let cNum = c;
  let dNum = d;
  if (b === undefined && c === undefined && d === undefined) {
    aNum = bNum = cNum = dNum = a;
  } else if (c === undefined && d === undefined) {
    cNum = aNum = a;
    dNum = bNum = b;
  } else if (d === undefined) {
    dNum = bNum;
  }
  return {
    aNum,
    bNum,
    cNum,
    dNum,
  };
}

console.log(padding(1));
console.log(padding(1, 2));
console.log(padding(1, 2, 3));
console.log(padding(1, 2, 3, 4));
