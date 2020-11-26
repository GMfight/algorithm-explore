function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let val = arr[i], j = i - 1;
    while (j >= 0 && (arr[j] > val)) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = val
  }
  return arr;
}
console.log(insertSort([3, 1, 2, 7, 6]));