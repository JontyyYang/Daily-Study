// 还是js原生api好用啊

const binarySearch = (arr: (string | number)[], target: number) => {
  const left = arr.indexOf(target);
  const right = arr.lastIndexOf(target);
  console.log(left, right);
};

const arr = [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9];

binarySearch(arr, 5);

export {};
