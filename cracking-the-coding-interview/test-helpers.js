const path = require('path');

class TestHelpers {
  static solutionInfo(testFile) {
    const name = path.basename(testFile).replace('test.', '');
    const filename = `../${name}`;

    return { name, filename };
  }
}

module.exports = TestHelpers;
