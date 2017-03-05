const stackOfBoxes = require('../stack-of-boxes');

describe('Stack of boxes', () => {
  it('handles a single box', () => {
    const box = { height: 10, width: 10, depth: 1 };
    const maxHeight = stackOfBoxes([box]);

    expect(maxHeight).toEqual(box.height);
  })
})
