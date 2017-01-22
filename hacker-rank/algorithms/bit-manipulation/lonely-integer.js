function printLonely(arr) {
  const visits = {};

  arr.forEach((num) => {
    if (!visits[num]) {
      visits[num] = 0;
    }
    visits[num] += 1;
  });

  for (const key in visits) { // eslint-disable-line
    if (visits[key] < 2) {
      console.log(key);
    }
  }
}

function main(lines) {
  const array = lines[1].split(' ').map(Number);

  printLonely(array);
}

module.exports = main;
