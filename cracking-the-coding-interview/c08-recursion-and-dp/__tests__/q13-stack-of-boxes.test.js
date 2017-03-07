const solutionInfo = require('../../test-helpers').solutionInfo(__filename);
const stackOfBoxes = require(solutionInfo.filename);

describe('Stack of boxes', () => {
  it('handles a single box', () => {
    const box = { height: 10, width: 10, depth: 1 };
    const maxHeight = stackOfBoxes([box]);

    expect(maxHeight).toEqual(box.height);
  });
});
