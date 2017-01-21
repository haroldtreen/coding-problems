const fs = require('fs');

class Utils {
  static loadInputLines(filename, i) {
    const input = filename.replace(/\.js/, `-input-${i}.txt`);
    return fs.readFileSync(input).toString().split('\n');
  }

  static loadOutputLines(filename, i) {
    const output = filename.replace(/\.js/, `-output-${i}.txt`);
    return fs.readFileSync(output).toString().split('\n').filter(l => l !== '');
  }
}

module.exports = Utils;
