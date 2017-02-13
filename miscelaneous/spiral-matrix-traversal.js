function readRow(arr, row, start, end) {
  const rowVals = [];
  for (let i = start; i <= end; i++) {
    rowVals.push(arr[row][i]);
  }
  return rowVals;
}

function readCol(arr, col, start, end) {
  const colVals = [];
  for (let i = start; i <= end; i++) {
    colVals.push(arr[i][col]);
  }
  return colVals;
}

function unroll(offset, arr) {
  let unrolled = [];
  const minRow = offset;
  const minCol = offset;

  const maxRow = arr.length - offset - 1;
  const maxCol = arr[minRow].length - offset - 1;

  unrolled = unrolled.concat(readRow(arr, minRow, minCol, maxCol));
  unrolled = unrolled.concat(readCol(arr, maxCol, minRow + 1, maxRow));
  unrolled = unrolled.concat(readRow(arr, maxRow, minCol, maxCol - 1).reverse());
  unrolled = unrolled.concat(readCol(arr, minCol, minRow + 1, maxRow - 1).reverse());

  return unrolled;
}

function main(arr) {
  let unrolled = [];
  const maxRowOffset = arr.length / 2;
  const maxColOffset = arr[0].length / 2;

  for (let i = 0; i < maxRowOffset && i < maxColOffset; i++) {
    unrolled = unrolled.concat(unroll(i, arr));
  }
  return [unrolled.join(' ')];
}

module.exports = main;
