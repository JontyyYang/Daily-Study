class myArray extends Array {
  mySplice(start: number, deleteCount: number, ...addList: any[]) {
    if (start < 0) {
      if (Math.abs(start) > this.length) {
        start = 0;
      } else {
        start += this.length;
      }
    }

    if (deleteCount === undefined) {
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
  }
}

const testArray = new myArray(10);
testArray.fill(0);
const a = testArray.mySplice(1, 4, 3, 9);
console.log(a, testArray);
