function canWriteWith(magazineFreqs, noteWords) {
  for (let i = 0; i < noteWords.length; i += 1) {
    const word = noteWords[i];

    if (magazineFreqs[word] > 0) {
      magazineFreqs[word] -= 1; // eslint-disable-line
    } else {
      return false;
    }
  }
  return true;
}

function main(lines) {
  lines.shift();
  const magazineWords = lines[0].split(' ');
  const noteWords = lines[1].split(' ');

  const magazineFreqs = magazineWords.reduce((freqs, word) => {
    freqs[word] = (freqs[word] || 0) + 1; // eslint-disable-line
    return freqs;
  }, {});

  console.log(canWriteWith(magazineFreqs, noteWords) ? 'Yes' : 'No');
}

const example = [
  '6 4',
  'give me one grand today night',
  'give one grand today',
];

// Output:
// Yes

main(example);
