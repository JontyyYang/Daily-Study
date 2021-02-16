const mySetInterval = (fn, ms) => {
  setTimeout(() => {
    fn();
    mySetInterval(fn, ms);
  }, ms);
};
