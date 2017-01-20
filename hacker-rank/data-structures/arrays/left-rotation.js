// Sample input
// 5 4
// 1 2 3 4 5
function rotateLeft(arr) {
  const el = arr.shift();
  arr.push(el);
}

function main(input) {
  const lines = input.split('\n').map(line => line.split(' ').map(Number));
  const d = lines[0][1];

  lines.shift();

  lines.forEach((line) => {
    for (let i = 0; i < d; i += 1) {
      rotateLeft(line);
    }
    console.log(line.join(' '));
  });
}

const input = [
  '5 4',
  '1 2 3 4 5',
].join('\n');

main(input);
