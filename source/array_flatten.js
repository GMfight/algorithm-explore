// 数组平铺展开
// 1.深度展开
function myFlatten(arr) {
  let res = []
  for (let i in arr) {
    console.log('i', i)
    if (Object.prototype.toString.call(arr[i]) !== '[object Array]') {
      res.push(arr[i])
    } else {
      let newRes = myFlatten(arr[i])
      console.log(newRes, 10)
      res = res.concat(newRes)
    }
  }
  return res;
}
// let testData = myFlatten([1, 2, [3, 9], 10])

// let testData = myFlatten([1, 2, [3, 4, [5, [6, 7], 8], 9], 10])
// 2.指定要展开的深度
function myArrFlatten(arr, depth) {
  let res = []
  for (let i in arr) {
    if (Object.prototype.toString.call(arr[i]) === '[object Array]' && depth > 0) {
      // console.log('arr')
      res = res.concat(myArrFlatten(arr[i], depth - 1))
    } else {
      // console.log('str')
      res.push(arr[i])
    }
  }
  return res;
}
console.log(myArrFlatten([1, 2, [3, 4, [5, [6, 7], 8], 9], 10], 1), 31);

// console.log(testData, 16)

// 3.数组操作，是否会改变原数组
// 改变：
// splice
// flat
// sort
// 不改变：
// slice
// map

// 4.数组遍历方法，对null，undefined，NaN的处理

// 5.一些特殊类型的查找
// 1）NaN
// 判断是否NaN：item !== item，则item为NaN
// 2）判断是否+0或-0
// 表现：+0===-0;
// 区分依据：1/+0!==1/-0；使用：1/a===1/b
// 参考：https://github.com/mqyqingfeng/Blog/issues/41
// 3）普通string和new String('')的区分方式：隐式转换
// a+''===b+'';
