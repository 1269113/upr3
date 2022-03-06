let occurrences = {}

let arr = ['ab','pq','mn','ab','mn','ab']

for (let i = 0, j = arr.length; i < j; i++) {
    occurrences[arr[i]] = (occurrences[arr[i]] || 0) + 1;
}

      // {ab: 3, pq: 1, mn: 2}
console.log(occurrences['mn']);  // 2