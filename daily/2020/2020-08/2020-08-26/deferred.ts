// 声明一个interface， 继承promise
export interface Deferred<T> extends Promise<T> {
  resolve: (value?: T) => void;
  reject: (reason?: any) => void;
  retry: (func: () => Promise<number>, num: number) => void;
}

// 构造一个函数
export function deferred<T>(): Deferred<T> {
  let methods;
  let retry;

  const promise = new Promise<T>((resolve, reject): void => {
    // 获取promise里面的resolve和reject方法
    methods = {resolve, reject};
  });

  // 返回对象合
  return Object.assign(promise, methods, retry) as Deferred<T>;
}
