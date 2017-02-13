// Naive

// function main(arr) {
//   const runningSums = [0];
//
//   arr.forEach((n, i) => {
//     runningSums[i + 1] = runningSums[i] + n;
//   });
//   let maxSum = runningSums[1];
//
//   for (let i = 0; i < runningSums.length; i++) {
//     for (let j = i + 1; j < runningSums.length; j++) {
//       const newSum = runningSums[j] - runningSums[i];
//       if (maxSum < newSum) {
//         maxSum = newSum;
//       }
//     }
//   }
//   return maxSum;
// }

// Kadane's algorithm
// function main(arr) {
//   let currentMax = arr.shift();
//   let maxForEnding = currentMax;
//
//   arr.forEach((x) => {
//     maxForEnding = Math.max(x, maxForEnding + x);
//     currentMax = Math.max(currentMax, maxForEnding);
//   });
//
//   return currentMax;
// }

// Divide & Conquer
function maxCrossingSum(arr, left, mid, right) {
  let sum = 0;
  let leftSum = -Number.MAX_VALUE;
  let rightSum = -Number.MAX_VALUE;

  for (let i = mid; i >= left; i--) {
    sum += arr[i];
    if (sum > leftSum) {
      leftSum = sum;
    }
  }

  sum = 0;
  for (let j = mid + 1; j <= right; j++) {
    sum += arr[j];
    if (sum > rightSum) {
      rightSum = sum;
    }
  }
  return rightSum + leftSum;
}

function maxSubarraySum(arr, left, right) {
  if (left >= right) {
    return arr[left];
  }

  const mid = Math.floor((right + left) / 2);
  return Math.max(
    maxSubarraySum(arr, left, mid),
    maxSubarraySum(arr, mid + 1, right),
    maxCrossingSum(arr, left, mid, right),
  );
}

function main(arr) {
  return maxSubarraySum(arr, 0, arr.length - 1);
}

module.exports = main;
