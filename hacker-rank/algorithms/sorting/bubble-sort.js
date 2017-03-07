function bubbleSort(arr) {
  let start = 0;
  let numSwaps = 0;

  while (start < arr.length) {
    for (let i = arr.length - 1; i >= start; i -= 1) {
      if (arr[i] > arr[i + 1]) {
        numSwaps += 1;
        const tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
      }
    }
    start += 1;
  }

  return { array: arr, numSwaps };
}

function main(lines) {
  lines.shift();
  const arr = lines[0].split(' ').map(Number);
  const results = bubbleSort(arr);

  return [
    `Array is sorted in ${results.numSwaps} swaps.`,
    `First Element: ${results.array[0]}`,
    `Last Element: ${results.array.pop()}`,
  ];
}

module.exports = main;
