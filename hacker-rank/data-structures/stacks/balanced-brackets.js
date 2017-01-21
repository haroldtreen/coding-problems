const OPENING_BRACKET = { '[': true, '{': true, '(': true };
const CLOSING_BRACKET = { ']': true, '}': true, ')': true };
const PAIRS = { '(': ')', '{': '}', '[': ']' };

function isBalanced(str) {
  const brackets = [];

  for (let i = 0; i < str.length; i += 1) {
    if (OPENING_BRACKET[str[i]]) {
      brackets.push(str[i]);
    } else {
      const topBracket = brackets.pop();
      if (PAIRS[topBracket] !== str[i]) {
        return false;
      }
    }
  }
  return brackets.length === 0;
}

function main(lines) {
  lines.shift();

  lines.forEach((l) => {
    console.log(isBalanced(l) ? 'YES' : 'NO');
  });
}

const example = [
  '3',
  '{[()]}',
  '{[(])}',
  '{{[[(())]]}}',
];

// Output:
// YES
// NO
// YES

main(example);
