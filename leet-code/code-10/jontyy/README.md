# 分析

### 第一思路（之前和同事讨论过）

1. 从头到尾遍历，设置两个变量，分别是前面的总数和保存的最大数，同时， 只要前面的总数是负数，那么前面的总数直接置为 0，以数组为例

```javascript
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
```

| 当前值 | totalnum | maxNum |
| ------ | -------- | ------ |
| -2     | 0        | 0      |
| 1      | 1        | 1      |
| -3     | -2 --》0 | 1      |
| 4      | 4        | 4      |
| -1     | 3        | 4      |
| 2      | 5        | 5      |
| 1      | 6        | 6      |
| -5     | 1        | 6      |
| 4      | 5        | 6      |

```javascript
const maxSubArray = nums => {
  if (!nums.length) {
    return null;
  }
  let maxNum = nums[0],
    totalNum = nums[0];
  for (let i = 1; i !== nums.length; i++) {
    totalNum += nums[i];
    if (totalNum < 0) {
      totalNum = 0;
    }
    if (totalNum > maxNum) {
      maxNum = totalNum;
    }
  }
  return maxNum;
};
```

2. 问题来了， 我以为当总数为负数时返回 0，但是比如数组

```javascript
const num = [-1];
```

我返回的就是 0， 其实结果是-1

所以结果就不对,所以我多加了一个判断， 也就是判断数组里面每一个字符是否是负数，如果是， 直接返回这个数组里面最大的负数

```javascript
const maxSubArray = nums => {
  if (!nums.length) {
    return null;
  }
  if (Math.max(...nums) < 0) {
    return Math.max(...nums);
  }
  let maxNum = nums[0],
    totalNum = nums[0];
  for (let i = 1; i !== nums.length; i++) {
    if (totalNum < 0) {
      totalNum = 0;
    }
    totalNum += nums[i];
    if (totalNum > maxNum) {
      maxNum = totalNum;
    }
  }
  return maxNum;
};
```

传宗觉得不太行，因为执行时间太长了， 原因很简单， math.max 也要走一遍循环，浪费时间， 所以传宗觉得用 if 更合适

所以就加了个判断，每次执行的时候判断 total 是否是正数，如果是正数，就喝当前值相加，如果不是，那么就是当前值

```javascript
const maxSubArray = nums => {
  if (!nums.length) {
    return null;
  }
  let maxNum = nums[0],
    totalNum = nums[0];
  for (let i = 1; i !== nums.length; i++) {
    if (totalNum < 0) {
      totalNum = nums[i];
    } else {
      totalNum += nums[i];
    }
    if (totalNum > maxNum) {
      maxNum = totalNum;
    }
  }
  return maxNum;
};
```
