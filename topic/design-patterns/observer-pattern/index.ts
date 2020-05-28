import {observerListType} from './interface';

const ObserverList = function (this: observerListType) {
  this.observerList = [];
};

ObserverList.prototype.add = (function (this: observerListType, obj: any) {
  this.observerList.push(obj);
} as any) as {new (obj: any): observerListType};

const observer = new ObserverList();
export {};
