class Queue {
  constructor(length) {
    this.queue = [];
    this.queue.length = length;
    this.end = 0;
    this.start = 0;
    this.itemsCount = 0;
  }

  enqueue(val) {
    if (this.itemsCount === this.queue.length) {
      throw new Error('Queue is full');
    }
    this.itemsCount++;
    this.queue[this.end] = val;
    this.end = (this.end + 1) % this.queue.length;
  }

  dequeue() {
    if (this.itemsCount === 0) {
      throw new Error('Queue is empty');
    }
    const val = this.queue[this.start];
    this.start = (this.start + 1) % this.queue.length;
    this.itemsCount -= 1;
    return val;
  }
}

module.exports = Queue;
