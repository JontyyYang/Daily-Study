import {observerListType, subjectType} from './interface';

export const ObserverList = (function (this: observerListType) {
  this.observerList = [];
} as any) as {new (): observerListType};

ObserverList.prototype.add = function (this: observerListType, obj: any) {
  this.observerList.push(obj);
};

ObserverList.prototype.empty = function (this: observerListType) {
  this.observerList = [];
};

ObserverList.prototype.count = function (this: observerListType) {
  return this.observerList.length;
};

ObserverList.prototype.get = function (this: observerListType, index: number) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
  return -1;
};

ObserverList.prototype.push = function (this: observerListType, obj: any, index: number) {
  let point = -1;
  if (index === 0) {
    this.observerList.unshift(obj);
    point = index;
  } else if (index === this.observerList.length) {
    this.observerList.push(obj);
    point = index;
  }
  return point;
};

ObserverList.prototype.indexOf = function (
  this: observerListType,
  obj: any,
  startIndex: number
): number {
  let i = startIndex,
    point = -1;
  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      point = i;
    }
    i++;
  }
  return point;
};

ObserverList.prototype.removeIndexAt = function (this: observerListType, index: number) {
  if (index === 0) {
    this.observerList.shift();
  } else if (index === this.observerList.length - 1) {
    this.observerList.pop();
  } else {
    // do nothing
  }
};

export const extend = (obj: any, extrsion: any) => {
  for (const i in obj) extrsion[i] = obj[i];
};

const observer = new ObserverList();
console.log(observer.observerList);
observer.add(1);
observer.add('yjd');
console.log(observer.observerList);
observer.empty();
console.log(observer.observerList);
observer.add('jontyy');
observer.add('jontyy1');
observer.add('jontyy2');
observer.add('jontyy3');
console.log(observer.count());
console.log(observer.get(2));
observer.push('push', 0);
observer.push('pushing', 5);
observer.push('pushing', 9);
console.log(observer.observerList);
console.log(observer.indexOf('jontyy2', 0));
observer.removeIndexAt(0);
console.log(observer.observerList);

// 下面模拟目标在观察者列表上添加、删除或者通知观察者的能力
export const Subject = (function (this: subjectType) {
  this.observers = new ObserverList();
} as any) as {new (): subjectType};

Subject.prototype.addObserver = function (this: subjectType, observer: any) {
  this.observers.add(observer);
};

Subject.prototype.removeObserVer = function (observer: any) {
  this.observer.removeIndexAt(this.observer.indexOf(observer, 0));
};

Subject.prototype.notify = function <T>(context: T) {
  const observerCount = this.observer.count();
  for (let i = 0; i !== observerCount; i++) {
    // 此处的update不做解释， 后续会在自定义行为部分进一步解释
    this.observer.get(i).update(context);
  }
};

export {};
