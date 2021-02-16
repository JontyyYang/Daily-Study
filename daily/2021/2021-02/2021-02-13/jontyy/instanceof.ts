// @ts-ignore
function Name(x) {
  // @ts-ignore
  this.x = x;
}
// @ts-ignore
const test = new Name(3);

const myInstance = (originObj: any, targetObj: any) => {
  const originObjTypeof = typeof originObj;
  const targetObjTypeof = typeof targetObj;
  if (originObjTypeof !== 'object' || targetObjTypeof !== 'function') {
    throw new Error('两个参数必须都是对象才可以');
  }

  let originProto = originObj.__proto__;
  const targetProto = targetObj.prototype;

  while (originProto) {
    if (originProto === targetProto) {
      return true;
    } else {
      originProto = originProto.__proto__;
    }
  }
  return false;
};

console.log(myInstance(test, Name));
export {};
