// 1. 现在有一个需求， 是展示一个商品列表
// 2. 查看商品有两个接口，一个是查看单个商品的， 一个是查看一些商品的
// 3. 商品的id也是通过接口返回的， 因为前面的遗留的问题， 也是多个接口返回的。这个时候可以把多个id收集起来一起调用接口
//  其实这边我也没感觉到代理模式，感觉就是防抖和节流呀

const upload = (ids: number[]): void => {
  setTimeout((ids: number[]) => console.log(ids), 0);
};

// 代理合并请求

const proxy = () => {
  let cache: number[] = [];
  let timer = 0;
  return (id: number) => {
    cache[cache.length] = id;
    if (timer) {
      return false;
    }
    timer = setTimeout(() => {
      upload(cache);
      clearTimeout(timer);
      cache = [];
    }, 3000);
  };
};
