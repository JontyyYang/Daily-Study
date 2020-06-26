class Foo {
  foo = 123;
  common = '123';
}

class Bar {
  bar = 123;
  common = '123';
}

// 用if else缩小类型范围
function doStuff(args: Foo | Bar) {
  if (args instanceof Foo) {
    console.log(args.foo);
    //@ts-ignore
    console.log(args.bar);
  }

  if (args instanceof Bar) {
    //@ts-ignore
    console.log(args.foo);
    console.log(args.bar);
  }
}

function doStuff2(args: Foo | Bar) {
  if (args instanceof Foo) {
    console.log(args.foo);
    //@ts-ignore
    console.log(args.bar);
  } else {
    //@ts-ignore
    console.log(args.foo);
    console.log(args.bar);
  }
}

export {};
