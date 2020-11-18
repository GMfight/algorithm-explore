// 数组去重
// 1.使用filter
let array = [1, 2, 1, 1, '1', '3', '4'];

function uniqueFilter(array) {
  let res = array.filter(function (item, index, array) {
    return array.indexOf(item) === index;
  })
  return res;
}

console.log(uniqueFilter(array));
// 2.使用排序
function uniqueSort(array) {
  return array.concat().sort().filter(function (item, index, array) {
    return !index || item !== array[index - 1]
  })
}

console.log(uniqueSort(array));