function isPrime(n) {
  if (n <= 1 || (n > 2 && n % 2 === 0)) {
    return false;
  }

  for (let i = 3; i <= Math.ceil(Math.sqrt(n)); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function main(lines) {
  lines.shift();
  const numbers = lines.map(Number);
  const isPrimes = numbers.map(isPrime);

  return isPrimes.map((b) => { // eslint-disable-line
    return b ? 'Prime' : 'Not prime';
  });
}

module.exports = main;
