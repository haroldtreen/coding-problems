function knownTopics(topics) {
  let count = 0;
  for (let i = 0; i < topics.length; i++) {
    count += topics[i] === '1' ? 1 : 0;
  }

  return count;
}

function orStrs(s1, s2) {
  let ordStr = '';
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === '1' || s2[i] === '1') {
      ordStr += '1';
    } else {
      ordStr += '0';
    }
  }
  return ordStr;
}

function main(lines) {
  lines.shift();

  const people = lines;
  const topicsFreq = {};
  let maxTopics = 0;

  for (let i = 0; i < people.length; i++) {
    for (let j = i + 1; j < people.length; j++) {
      const combinedTopics = orStrs(people[i], people[j]);
      const topicsCount = knownTopics(combinedTopics);

      if (topicsCount > maxTopics) {
        maxTopics = topicsCount;
        topicsFreq[maxTopics] = 1;
      } else if (topicsCount === maxTopics) {
        topicsFreq[maxTopics]++;
      }
    }
  }
  return [maxTopics.toString(), topicsFreq[maxTopics].toString()];
}

module.exports = main;
