function shiftRight(arr, i) {
  let j = arr.length - 1;
  while (i <= j) {
    arr[j + 1] = arr[j];
    j--;
  }
  return arr;
}

function main(n, m) {
  while (n.length > 0) {
    let i;
    const last = n.pop();

    for (i = 0; i < m.length; i++) {
      if (last < m[i]) {
        shiftRight(m, i);
        m[i] = last;
        break;
      }
    }
  }

  return m;
}

module.exports = main;
