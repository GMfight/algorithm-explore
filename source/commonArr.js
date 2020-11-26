// 1.两个数组中的公共数组
function commonTwo(arr, brr) {
  let cArr = [];
  let minLen = Math.min(arr.length, brr.length);
  let i = 0;
  while (i < minLen) {
    let cur_value = arr.shift();
    let b_index = brr.findIndex((o) => o === cur_value);
    if (b_index >= 0) {
      brr.splice(b_index, 1);
      cArr.push(cur_value);
    }
    i++;
  }
  console.log(cArr, 15);
  return cArr;
}
commonTwo([0, 1, 2, 3, 6, 7, 8], [0, 1, 1, 1, 3, 6, 9, 10, 5]);
