class Contacts {
  constructor() {
    this.trie = { count: 0 };
  }

  add(str) {
    let lastObj = this.trie;
    str.split('').forEach((c) => {
      if (lastObj[c]) {
        lastObj[c].count += 1;
      } else {
        lastObj[c] = { count: 1 };
      }
      lastObj = lastObj[c];
    });
  }

  find(str) {
    let lastObj = this.trie;
    let i = 0;
    const chars = str.split('');

    while (lastObj && chars[i]) {
      lastObj = lastObj[chars[i]];
      i += 1;
    }

    lastObj = lastObj || {};

    return lastObj.count || 0;
  }
}

function main(lines) {
  lines.shift(); // remove n

  const contacts = new Contacts();
  lines.forEach((l) => {
    const parts = l.split(' ');

    if (parts[0] === 'find') {
      console.log(contacts.find(parts[1]));
    } else {
      contacts.add(parts[1]);
    }
  });
}

// const example = [
//   '4',
//   'add hack',
//   'add hackerrank',
//   'find hac',
//   'find hak',
// ];

// Output
// 2
// 0

const example = [
  '11',
  'add s',
  'add ss',
  'add sss',
  'add ssss',
  'add sssss',
  'find s',
  'find ss',
  'find sss',
  'find ssss',
  'find sssss',
  'find ssssss',
];

// Output
// 5
// 4
// 3
// 2
// 1
// 0

main(example);
