/*
 * @Author: jontyy
 * @Date: 2020-05-24 16:40:08
 * @Description:
 */

//  计算奖金， 原始demo
// 问题比较大， 有很多的if  esle，缺乏弹性，如果新加一种等级， 或者修改原有逻辑， 必须要修改这个函数， 是违反了封闭开口逻辑的。而且算法的复用性比较差
const calculateBonus1 = (level: string, salary: number): number => {
  if (level === 'S') {
    return salary * 4;
  } else if (level === 'A') {
    return salary * 3;
  } else if (level === 'B') {
    return salary * 2;
  } else {
    //  如果不加这里的话， 当条件不满足时，会返回undefined， 可能会影响后面逻辑
    return 0;
  }
};

console.log(calculateBonus1('B', 2000));
console.log(calculateBonus1('S', 6000));

// 用组合函数重构
// 问题依然存在， 当逻辑变得更加复杂， calculateBonus2函数可能越来越大
const calculateBonusS = (salary: number) => salary * 4;
const calculateBonusA = (salary: number) => salary * 3;
const calculateBonusB = (salary: number) => salary * 2;

const calculateBonus2 = (level: string, salary: number): number => {
  if (level === 'S') {
    return calculateBonusS(salary);
  } else if (level === 'A') {
    return calculateBonusA(salary);
  } else if (level === 'B') {
    return calculateBonusB(salary);
  } else {
    //  如果不加这里的话， 当条件不满足时，会返回undefined， 可能会影响后面逻辑
    return 0;
  }
};

console.log(calculateBonus2('B', 2000));
console.log(calculateBonus2('S', 6000));

// 策略模式重构
// 本质上，我感觉就是借助js的对象， 然后把方法都封装到对象里面去， 不断的调用对象的方法而已
// 但是的确解决了 if，else的问题，是通过对象的索引来解决判断的问题。
interface strategiesType {
  [key: string]: (salary: number) => number;
}
const strategies: strategiesType = {
  S: (salary: number): number => salary * 4,
  A: (salary: number): number => salary * 3,
  B: (salary: number): number => salary * 2,
};

const calculateBonus3 = (level: string, salary: number): number => {
  return strategies[level](salary);
};

console.log(calculateBonus3('B', 2000));
console.log(calculateBonus3('S', 6000));

// es6
interface calculateType {
  calculate: (salary: number) => number;
}
class perpermanceS {
  calculate(salary: number): number {
    return salary * 4;
  }
}

class perpermanceA {
  calculate(salary: number): number {
    return salary * 3;
  }
}

class perpermanceB {
  calculate(salary: number): number {
    return salary * 2;
  }
}

class Bonus {
  salary: number;
  strategy: calculateType;

  constructor() {
    this.salary = 0;
    this.strategy = {
      calculate() {
        return 0;
      },
    };
  }

  setSalary(salary: number) {
    this.salary = salary;
  }

  setPerformance(strategy: calculateType) {
    this.strategy = strategy;
  }

  getBonus() {
    return this.strategy.calculate(this.salary);
  }
}

const bonus = new Bonus();
bonus.setSalary(1000);
bonus.setPerformance(new perpermanceS());
console.log(bonus.getBonus());
bonus.setPerformance(new perpermanceA());
console.log(bonus.getBonus());
bonus.setPerformance(new perpermanceB());
console.log(bonus.getBonus());
export {};
