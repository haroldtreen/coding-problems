function mergeSortWInversions(arr) {
  if (arr.length === 1) {
    return { array: arr, inversions: 0 };
  }

  const halfArr = arr.splice(0, Math.floor(arr.length / 2));

  const sorted1 = mergeSortWInversions(halfArr);
  const sorted2 = mergeSortWInversions(arr);
  const a1 = sorted1.array;
  const a2 = sorted2.array;

  const sorted = [];
  let x = 0;
  let i = 0;
  let j = 0;
  let inversions = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i] <= a2[j]) {
      sorted[x++] = a1[i++];
    } else {
      inversions += (a1.length - i);
      sorted[x++] = a2[j++];
    }
  }

  while (i < a1.length) {
    sorted[x++] = a1[i++];
  }
  while (j < a2.length) {
    sorted[x++] = a2[j++];
  }

  return { array: sorted, inversions: (inversions + sorted1.inversions + sorted2.inversions) };
}

function main(lines) {
  const numSets = lines.shift();
  const sets = [];

  for (let i = 0; i < numSets; i += 1) {
    lines.shift();
    sets.push(lines.shift().split(' ').map(Number));
  }
  return sets.map(mergeSortWInversions).map(r => r.inversions.toString());
}

module.exports = main;
