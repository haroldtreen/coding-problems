let main = main || function (){}; // eslint-disable-line

function processData(input) {
  main(input);
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
