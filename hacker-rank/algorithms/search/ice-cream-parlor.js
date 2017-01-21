function chooseOptions(c) {
  let option1;
  let option2;

  const N = c.options.length;
  for (let i = 0; i < N; i += 1) {
    option1 = c.options[i];
    for (let j = i + 1; j < N; j += 1) {
      option2 = c.options[j];

      if ((option1 + option2) === c.money) {
        return [i + 1, j + 1];
      }
    }
  }
  return [0, 0];
}

function run(cases) {
  cases.forEach((c) => {
    const options = chooseOptions(c);
    console.log(options.join(' '));
  });
}

function main(lines) {
  const cases = [];

  for (let i = 1; i < lines.length; i += 3) {
    cases.push({
      money: Number.parseInt(lines[i], 10),
      options: lines[i + 2].split(' ').map(n => Number.parseInt(n, 10)),
    });
  }
  return run(cases);
}

const example = [
  '2',
  '4',
  '5',
  '1 4 5 3 2',
  '4',
  '4',
  '2 2 4 3',
];

// Output:
// 1 4
// 1 2

main(example);
