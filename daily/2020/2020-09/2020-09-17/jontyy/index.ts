const searchLeft = (arr: (string | number)[], target: number): number => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      right = mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

const searchRight = (arr: (string | number)[], target: number): number => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
};

const binarySearch = (arr: (string | number)[], target: number) => {
  const left = searchLeft(arr, target);
  const right = searchRight(arr, target);
  console.log(left, right);
};

const arr = [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9];

binarySearch(arr, 5);

export {};
