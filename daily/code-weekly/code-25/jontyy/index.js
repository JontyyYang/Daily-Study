const MaxQueue = function () {
  this.queue = [];
  this.sortQueue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if (this.sortQueue.length > 0) {
    return this.sortQueue[0];
  }
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  if (value) {
    this.queue.push(value);
  }

  while (this.sortQueue.length > 0 && this.sortQueue[this.sortQueue.length - 1] < value) {
    this.sortQueue.pop();
  }
  if (value) {
    this.sortQueue.push(value);
  }
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (this.queue.length > 0) {
    let item = this.queue.shift();
    if (item === this.sortQueue[0]) {
      this.sortQueue.shift();
    }
    return item;
  } else {
    return -1;
  }
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */

// var obj = new MaxQueue();
// obj.push_back(1);
// obj.push_back(1);
// obj.push_back(2);
// obj.push_back();
// obj.push_back();
// obj.push_back();
// obj.push_back();

// console.log(obj.max_value());

// console.log(obj);
