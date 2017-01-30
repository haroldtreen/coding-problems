function main(lines) {
  const s = lines[0];
  const words = s.length < 1 ? 0 : (s.match(/([A-Z])/g) || []).length + 1;
  return [words];
}

module.exports = main;
// OR

// function main() {
//     var s = readLine();
//     if (s.length < 1) {
//         console.log(0);
//     } else {
//         console.log((s.match(/([A-Z])/g) || []).length + 1)
//     }
// }
