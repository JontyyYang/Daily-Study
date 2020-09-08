const delArray = (arr: any[], index: number, num: number = arr.length): any[] => {
  const len = arr.length;

  // 如果数组长度减去索引，比要删除的数量还要多， 那就删除传入的值的数量， 否则就删除最多的数量
  num = len - index >= num ? num : len - index;

  const head = arr.slice(0, index);
  const body = arr.slice(index, index + num);
  const tail = arr.slice(index + num);

  // 利用引用类型特性修改数组
  const temp = [...head, ...tail];
  const tempLen = temp.length;
  arr.length = tempLen;
  for (let i = 0; i !== tempLen; i++) {
    arr[i] = temp[i];
  }

  return [...body];
};

const formatIndex = (index: number, len: number): number => {
  // 处理负数情况
  while (index < 0) {
    index += len;
  }

  // 处理index大于len情况
  if (index >= len) {
    index = len;
  }

  return index;
};

const addArray = (arr: any[], index: number, num: number, args: any[]): any[] => {
  delArray(arr, index, num);
  const head = arr.slice(0, index);
  const tail = arr.slice(index);
  const temp = [...head, ...args, ...tail];
  const tempLen = temp.length;
  arr.length = tempLen;
  for (let i = 0; i !== tempLen; i++) {
    arr[i] = temp[i];
  }
  return arr;
};

class myArray extends Array {
  mySplice(index: number, howMany?: number, ...args: any[]) {
    //  判断this不存在的情况， 直接抛错抛出去
    if (this === null || this === undefined) {
      throw new TypeError('Cannot read property of null or undefined');
    }

    //  拷贝当前数组
    const O = Object(this);
    const len = O.length;

    // 如果第一个参数不存在， 直接返回空数组
    // 理论上，ts会过滤掉这种问题
    if (index === undefined) {
      return [];
    }

    // 如果索引不是数字， 直接清空
    if (Number.isNaN(Number(index))) {
      return delArray(O, 0);
    }

    // 校准index的值， 主要是解决出现大于index的或者为负数
    index = formatIndex(index, len);

    // 第二个参数没有的情况
    if (howMany === undefined) {
      return delArray(O, index);
    }

    // 第二个参数不是数字，返回空数组
    if (Number.isNaN(Number(index))) {
      return [];
    } else {
      // 这里需要判断第三个参数存在不存在， 存在就需要塞数组， 不存在，就
      if (Array.isArray(args)) {
        // add
        return addArray(O, index, howMany, args);
      } else {
        return delArray(O, index, howMany);
      }
    }
  }
}

const testArray = new myArray(4);
testArray.fill(1);
// //@ts-ignore  测试第一个参数为空的情况
// console.log(testArray.mySplice());
// //@ts-ignore  测试第一个参数不是数字的情况, 直接清空
// console.log(testArray.mySplice('a'));
// 测试第二个参数没有的情况
// testArray.mySplice(1);
// 测试正常的两个参数情况
// console.log(testArray.mySplice(1, 3));
console.log(testArray.mySplice(1, 3, 4, 6, 7));
console.log(testArray.mySplice(1, 0, 4, 6, 7));

// console.log(testArray);
export {};
