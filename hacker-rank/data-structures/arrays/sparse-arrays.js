// Sample input
// 4
// aba
// baba
// aba
// xzxb
// 3
// aba
// xzxb
// ab

class SparseArray {
  constructor(strings) {
    this.strings = strings;

    this.counts = {};
    this.strings.forEach((s) => {
      this.counts[s] = this.counts[s] ? this.counts[s] + 1 : 1;
    });
  }

  query(queryStr) {
    return this.counts[queryStr] || 0;
  }
}

function main(lines) {
  const numStrings = parseInt(lines[0], 10);
  const strings = [];
  const queries = [];

  for (let i = 1; i < numStrings + 1; i += 1) {
    strings.push(lines[i]);
  }

  for (let j = numStrings + 2; j < lines.length; j += 1) {
    queries.push(lines[j]);
  }

  console.log(strings, queries);

  const sparseArray = new SparseArray(strings);

  queries.forEach((q) => {
    console.log(sparseArray.query(q));
  });
}

const ls = [
  '4',
  'aba',
  'baba',
  'aba',
  'xzxb',
  '3',
  'aba',
  'xzxb',
  'ab',
];

main(ls);
