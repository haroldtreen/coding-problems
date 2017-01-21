function leftIndex(index) { return (index * 2) + 1; }
function rightIndex(index) { return (index * 2) + 2; }
function parentIndex(index) { return Math.floor((index - 1) / 2); }

class Heap {
  static minCompare(parent, child) {
    return this.heap[parent] > this.heap[child];
  }

  static maxCompare(parent, child) {
    return this.heap[parent] < this.heap[child];
  }

  constructor(compareFn) {
    this.heap = [];
    this.compare = compareFn;
  }

  value() {
    return this.heap[0];
  }

  add(num) {
    this.heap.push(num);

    let index = this.size() - 1;

    while (index >= 0) {
      const p = parentIndex(index); // eslint-disable-line
      if (p >= 0 && this.compare(p, index)) {
        this.swap(p, index);
      }
      index = p;
    }
  }

  remove() {
    const removed = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.length -= 1;

    let index = 0;
    while (leftIndex(index) < this.size()) {
      const l = leftIndex(index);
      const r = rightIndex(index);
      const swapIndex = this.compare(l, r) ? r : l;

      if (this.compare(index, swapIndex)) {
        this.swap(index, swapIndex);
      }
      index = swapIndex;
    }
    return removed;
  }

  swap(i, j) {
    const tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
  }

  size() {
    return this.heap.length;
  }
}

class MedianList {
  constructor() {
    this.minHeap = new Heap(Heap.minCompare);
    this.maxHeap = new Heap(Heap.maxCompare);
  }

  add(num) {
    if (num > this.median()) {
      this.minHeap.add(num);
    } else {
      this.maxHeap.add(num);
    }
    this.balance();
  }

  balance() {
    if (this.minHeap.size() > this.maxHeap.size()) {
      const removedMin = this.minHeap.remove();
      this.maxHeap.add(removedMin);
    } else if (this.maxHeap.size() > this.minHeap.size()) {
      const removedMax = this.maxHeap.remove();
      this.minHeap.add(removedMax);
    }
  }

  median() {
    let median;
    if (this.minHeap.size() === this.maxHeap.size()) {
      median = ((this.minHeap.value() + this.maxHeap.value()) / 2);
    } else if (this.minHeap.size() > this.maxHeap.size()) {
      median = this.minHeap.value();
    } else {
      median = this.maxHeap.value();
    }
    return median.toFixed(1);
  }
}

function main(lines) {
  lines.shift();
  lines = lines.filter(l => l); // eslint-disable-line
  const outputs = [];

  const medianList = new MedianList();

  lines.forEach((l) => {
    medianList.add(Number(l));
    outputs.push(medianList.median());
  });
  return outputs;
}

module.exports = main;
