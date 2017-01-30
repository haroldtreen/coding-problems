function mismatchedIndices(arr) {
  const changes = [];
  let j = arr.length - 1;
  let i = 0;

  while (i < j) {
    if (arr[i] !== arr[j]) {
      changes.push(i);
    }
    i++;
    j--;
  }
  return changes;
}

function setIndex(arr, i, v) {
  arr[i] = v; // eslint-disable-line
  arr[arr.length - i - 1] = v; // eslint-disable-line
  return arr;
}

function applyChanges(str, changes, maxChanges) {
  let extraChanges = maxChanges - changes.length;
  const chars = str.split('');

  let lastIndex = 0;

  changes.forEach((i) => {
    let max = Math.max(chars[i], chars[chars.length - i - 1]).toString();

    while (lastIndex < i && extraChanges > 1) {
      if (chars[lastIndex] !== '9') {
        setIndex(chars, lastIndex, '9');
        extraChanges -= 2;
      }
      lastIndex++;
    }

    if (extraChanges > 0 && max !== '9') {
      max = '9';
      extraChanges--;
    }
    setIndex(chars, i, max);
  });

  while (lastIndex < chars.length / 2 && extraChanges > 1) {
    if (chars[lastIndex] !== '9') {
      setIndex(chars, lastIndex, '9');
      extraChanges -= 2;
    }
    lastIndex++;
  }

  if (extraChanges > 0 && chars.length % 2 !== 0) {
    const mid = Math.floor(chars.length / 2);
    chars[mid] = '9';
  }

  return chars.join('');
}

function largestPalidrome(numString, maxChanges) {
  const chars = numString.split('');
  const changes = mismatchedIndices(chars);

  if (changes.length > maxChanges) {
    return '-1';
  }

  return applyChanges(numString, changes, maxChanges);
}

function main(lines) {
  const maxChanges = parseInt(lines.shift().split(' ')[1], 10);
  return [largestPalidrome(lines.shift(), maxChanges)];
}

module.exports = main;
