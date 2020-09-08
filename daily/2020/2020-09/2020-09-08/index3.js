// 这代码太理想了，根本没做任何兼容处理
Array.prototype._splice = function (start, deleteCount, ...addList) {
  if (start < 0) {
    if (Math.abs(start) > this.length) {
      start = 0;
    } else {
      start += this.length;
    }
  }

  if (typeof deleteCount === 'undefined') {
    deleteCount = this.length - start;
  }

  const removeList = this.slice(start, start + deleteCount);

  const right = this.slice(start + deleteCount);

  let addIndex = start;
  addList.concat(right).forEach(item => {
    this[addIndex] = item;
    addIndex++;
  });
  this.length = addIndex;

  return removeList;
};
const a = [1, 2, 3];
const b = a._splice(1, 1, 3);
console.log(b, a);
