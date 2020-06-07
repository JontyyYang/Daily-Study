'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({__proto__: []} instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
exports.__esModule = true;
var Point = /** @class */ (function () {
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  Point.prototype.add = function (point) {
    return new Point(this.x + point.x, this.y + point.y);
  };
  return Point;
})();
var p1 = new Point(0, 10);
var p2 = new Point(3, 5);
var p3 = p1.add(p2);
console.log(p3);
var Point3D = /** @class */ (function (_super) {
  __extends(Point3D, _super);
  function Point3D(x, y, z) {
    var _this = _super.call(this, x, y) || this;
    _this.z = z;
    return _this;
  }
  Point3D.prototype.add = function (point) {
    var point2d = _super.prototype.add.call(this, point);
    return new Point3D(point2d.x, point2d.y, this.z + point.z);
  };
  return Point3D;
})(Point);
var p4 = new Point3D(1, 2, 3);
var p5 = new Point3D(4, 5, 6);
var p6 = p4.add(p5);
console.log(p6);
var someThing = /** @class */ (function () {
  function someThing() {
    someThing.instance++;
  }
  someThing.instance = 0;
  return someThing;
})();
var someThing1 = new someThing();
var someThing2 = new someThing();
console.log(someThing.instance, 'someThing.instance');
