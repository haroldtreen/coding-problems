let _main = main || function (){}; // eslint-disable-line

function processData(input) {
  const lines = input.split('\n');
  const result = _main(lines);
  if (result) { console.log(result.join('\n')); }
}

let input = '';
process.stdin.resume();
process.stdin.setEncoding('ascii');
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  processData(input);
});
