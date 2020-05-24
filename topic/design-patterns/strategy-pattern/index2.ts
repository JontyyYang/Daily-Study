/*
 * @Author: jontyy
 * @Date: 2020-05-24 18:01:54
 * @Description:
 */

// 缓动动画

const runRule = {
  liner: (t: number, b: number, c: number, d: number): number => (c * t) / d + b,
  easeIn: (t: number, b: number, c: number, d: number): number => c * (t /= d) * t + b,
  strongEaseIn: (t: number, b: number, c: number, d: number): number =>
    c * (t /= d) * t * t * t * t + b,
  strongEaseOut: (t: number, b: number, c: number, d: number): number =>
    c * ((t = t / d - 1) * t * t * t * t + 1) + b,
  sineaseIn: (t: number, b: number, c: number, d: number): number => c * (t /= d) * t * t + b,
  sineaseOut: (t: number, b: number, c: number, d: number): number =>
    c * ((t = t / d - 1) * t * t + 1) + b,
};

console.log(runRule);
