// 两数相除

// (17,3)
// 1<<4+1 1<<1+1

// 1.（34）排序数组中找元素第一个和最后一个位置
function pos(arr, target) {
  let start = -1,
    end = -1;
  for (let i = 0; i < arr.length; ) {
    if (arr[i] < target) {
      i++;
      continue;
    }
    if (arr[i] > target) {
      return [start, end];
    }
    if (start >= 0) {
      end = i;
    } else {
      start = i;
      end = i;
    }
    i++;
  }
  return [start, end];
}
// console.log(pos([1, 3, 4, 5, 6, 6, 7, 8], 6));

// 数组总和
function candidate() {}
