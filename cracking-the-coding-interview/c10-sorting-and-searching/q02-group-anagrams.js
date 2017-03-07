// Write a method to sort an array of strings so that all the anagrams are
// next to each other.

// Questions:
// 1) How to sort within groups.
// 2) Ascending/Descending
let WORDS = ['hi', 'bye', 'ih', 'yeb', 'eby', 'hi', 'bike', 'fly'];
let WORDS2 = ['hi', 'bye', 'ih', 'yeb', 'eby', 'hi', 'bike', 'fly'];

for (let i = 0; i < 5; i++) {
  WORDS = WORDS.concat(WORDS);
  WORDS2 = WORDS.concat(WORDS2);
}

function anagramSort(words) {
  return words.sort((w1, w2) => {
    w1 = w1.split('').sort().join('');
    w2 = w2.split('').sort().join('');

    return w1 > w2;
  });
}

function anagramSortFast(words) {
  const anagrams = new Map();
  let sorted = [];
  words.forEach((word) => {
    const sortedWord = word.split('').sort().join('');
    if (anagrams.get(sortedWord)) {
      anagrams.get(sortedWord).push(word);
    } else {
      anagrams.set(sortedWord, [word]);
    }
  });

  anagrams.forEach((entry) => {
    sorted = sorted.concat(entry);
  });
  return sorted;
}

console.time('slow');
anagramSort(WORDS2);
console.timeEnd('slow');

console.time('fast');
anagramSortFast(WORDS);
console.timeEnd('fast');
