// 问题
// 1.循环引用（只能实现浅层次循环）
// 2.函数的拷贝
func.bind()
// bind为空时？

// 3.数组和对象(类型判断)
// Object.prototype.toString.call(obj)
// 4.正则，日期类型
// 实现参考：
// http://www.alloyteam.com/2017/08/12978/
// 5.正则，时间，函数的拷贝
  // 正则，时间都需要重新创建；函数拷贝返回当前函数
function clone(oriObj) {
  let originObj = oriObj;
  let deepClone = function (obj) {
    if (typeof obj === "function") return obj.bind(this)
    if (obj === null || obj === undefined) return null;

    if (typeof obj !== "object" || Object.prototype.toString.call(obj) === '[object Regexp]' || Object.prototype.toString.call(obj) === '[object Date]') {
      return obj;
    }
    let newobj = {};
    for (let i in obj) {
      if (obj[i] === originObj) {
        newobj[i] = originObj;
      } else if (obj[i] === obj) {
        newobj[i] = newobj;

      } else {

        if (Object.hasOwnProperty.call(obj, i)) {

          newobj[i] = clone(obj[i]);
        }
      }
    }
    // console.log(newobj, '29')
    return newobj;
  }
  return deepClone(oriObj)
}
let a = {
  name: "a",
  id: "a_id",
  data: {
    time: 2020,
    label: "test",
    owner: {
      number: "001",
      print() {
        console.log("print func");
      },
    },
  },
};
a.target = a;
console.log(a, 'a')
let b = clone(a);
console.log(b, 'b')
a.data.owner.print = function () {
  console.log('print a')
}
a.data.owner.print()
b.data.owner.print();
// b.data.owner.number = "002";
// console.log("a", a.data.owner);
// console.log("b", b.data.owner);
// 循环引用时的深度比较？（需改进）
// 实现参考：https://github.com/mqyqingfeng/Blog/issues/41
function compare(a, b) {
  if ((a === null || a === undefined) && (a === null || a === undefined))
    return true;
  if (a === null || a === undefined || a === null || a === undefined)
    return false;
  if (typeof a === "function" || typeof b === "function") return false;
  if (typeof a !== "object" && typeof b !== "object") return a === b;
  if (!(typeof a === "object" && typeof b === "object")) return false;
  if (
    Object.keys(a)
      .sort()
      .join("") !==
    Object.keys(b)
      .sort()
      .join("")
  )
    return false;
  for (let i in a) {
    if (a[i] && b[i]) {
      let bol = compare(a[i], b[i]);
      if (bol) {
        continue;
      }
      return false;
    }
  }
  return true;
}
// console.log(
//   compare(
//     {
//       id: 1,
//       name: 2,
//       data: {
//         id: 1,
//         num: {
//           label: "aa",
//         },
//       },
//     },
//     {
//       name: 2,
//       id: 1,
//       data: {
//         id: 1,
//         num: {
//           label: "aa",
//         },
//       },
//     }
//   )
// );
