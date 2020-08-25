import {resolve} from 'path';

const list: number[] = [4, 5, 6];

const add = (x: number): Promise<number> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x + x);
    }, 1000);
  });
};

const outputGapOneSecond = async (): Promise<void> => {
  for (const i of list) {
    const res = await add(i);
    console.log(res, new Date());
  }
};

outputGapOneSecond();

//  还可以利用promise本身的回调， 见index3.ts
export default outputGapOneSecond;
