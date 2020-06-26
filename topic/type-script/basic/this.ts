type Point = {
  x: number;
  y: number;
  moveBy(dx: number, dy: number): void;
};

const p: Point = {
  x: 10,
  y: 20,
  moveBy(x, y) {
    console.log(this);
    // {x:10,y:20,moveBy:func}
    this.x = x;
    this.y = y;
  },
};

const foo = {
  x: 'hello',
  func(n: string) {
    this;
    // {x:string, func(n:string):void}
  },
};

const bar = {
  x: 'Hello',
  f(this: {message: string}) {
    this;
    // {message:string}
  },
};

export {};
