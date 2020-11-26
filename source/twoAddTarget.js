// 1.给定一个整数数组 nums 和一个目标值 target，
// 请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
// 可以假设每种输入只会对应一个答案。
// 但是，不能重复利用这个数组中同样的元素。
// 没有符合条件时返回空数组
function twoTarget1(arr, target) {
  //   arr = arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }
  return null;
}

// console.log(twoTarget1([1, -1, 3, 4, 5, 6], 3));
// 2.给定无序，不重复数组data，取n个数，使相加和为sum

function nTarget(arr, target) {
  // let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return [arr[i]];
    if (arr[i] > target) return []
    let res = nTarget(i === arr.length - 1 ? arr.slice(0, i) : arr.slice(0, i).concat(arr.slice(i + 1, arr.length)), target - arr[i])
    if (res && res.length > 0) {
      return [arr[i], ...res]
    }
  }
}
console.log(nTarget([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 17, 19, 20, 21], 36))