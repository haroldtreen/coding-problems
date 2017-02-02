const A_LOWER = 97;
const Z_LOWER = 122;
const A_UPPER = 65;
const Z_UPPER = 90;

function cipher(char, key) {
  const code = char.charCodeAt(0);
  let newCode = code;

  if (code >= A_LOWER && code <= Z_LOWER) {
    newCode = A_LOWER + (code - A_LOWER + key) % 26; // eslint-disable-line
  } else if (code >= A_UPPER && code <= Z_UPPER) {
    newCode = A_UPPER + (code - A_UPPER + key) % 26; // eslint-disable-line
  }
  return String.fromCharCode(newCode);
}

function main(lines) {
  lines.shift();
  const string = lines.shift();
  const key = Number(lines.shift());

  return [[].map.call(string, c => cipher(c, key)).join('')];
}

module.exports = main;
