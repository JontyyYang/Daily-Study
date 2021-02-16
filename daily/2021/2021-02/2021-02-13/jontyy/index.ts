const testFunc = (total: number, firstNumber = 1, secondNumber = 1, ThirdNumber = 1): number => {
  if (total <= 3) {
    return firstNumber;
  }

  return testFunc(total - 1, firstNumber + secondNumber + ThirdNumber, firstNumber, secondNumber);
};
console.log(testFunc(4));
console.log(testFunc(5));
console.log(testFunc(6));
console.log(testFunc(7));
console.log(testFunc(8));
console.log(testFunc(800));

const updateTestFunc = (firstNumber = 1, secondNumber = 1, ThirdNumber = 1) => {
  return (total: number) => {
    if (total <= 3) {
      return firstNumber;
    }

    return testFunc(total - 1, firstNumber + secondNumber + ThirdNumber, firstNumber, secondNumber);
  };
};

const lessData = updateTestFunc(1, 1, 1);
console.log(lessData(800));

export {};
