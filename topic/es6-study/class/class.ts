class Point {
  // x: number;
  // y: number;

  constructor(public x: number, public y: number) {
    this.x = x;
    this.y = y;
  }

  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y);
  }
}

const p1 = new Point(0, 10);
const p2 = new Point(3, 5);
const p3 = p1.add(p2);

console.log(p3);

class Point3D extends Point {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }

  add(point: Point3D) {
    const point2d = super.add(point);
    return new Point3D(point2d.x, point2d.y, this.z + point.z);
  }
}

const p4 = new Point3D(1, 2, 3);
const p5 = new Point3D(4, 5, 6);
const p6 = p4.add(p5);
console.log(p6);

class someThing {
  static instance = 0;

  constructor() {
    someThing.instance++;
  }
}

const someThing1 = new someThing();
const someThing2 = new someThing();
console.log(someThing.instance, 'someThing.instance');

class FooBase {
  public x: number;
  protected y: number;
  private z: number;
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const foo = new FooBase(1, 2, 3);
foo.x;
// 下面两个会报错，因为一个是protect，一个是private，详细见readme
// foo.y;
// foo.z;

class FooChildd extends FooBase {
  constructor(x: number, y: number, z: number) {
    super(x, y, z);
    this.x;
    this.y;
    // 下面会报错，因为是私有的
    // this.z;
  }
}

// 抽象 abstract
// 可以被认为是一个访问修饰符， 可以运用在类和类的任意成员上，拥有一个abstract意味着，该函数不能直接调用。并且子类必须实现这个功能

// 构造器
// 构造器是可选的， 类不是必须要一个构造器

export {};
