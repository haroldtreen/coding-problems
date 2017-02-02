function main(lines) {
  const [n, k, q] = lines.shift().split(' ').map(Number);
  const arr = lines.shift().split(' ').map(Number);
  const queries = lines.map(Number);

  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return queries.map(q => arr[q]);
}
