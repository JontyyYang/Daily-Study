export interface observerListType {
  observerList: any[];
  add: (obj: any) => void;
  empty: () => void;
  count: () => number;
  get: (index: number) => number;
  push: (obj: any, index: number) => number;
  indexOf: (obj: any, startIndex: number) => number;
  removeIndexAt: (index: number) => void;
}

export interface subjectType {
  observers: observerListType;
  addObserver: (obj: any) => void;
  removeObserVer: (obj: any) => void;
}
