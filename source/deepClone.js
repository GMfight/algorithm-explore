// clone存在问题：
// 1.date和正则这类不能拷贝到
// 2.object和array需要区分处理
// 3.递归引用情况
// 4.函数的拷贝

function clone(obj) {
  //   console.log(obj);
  if (typeof obj === "function") return obj;
  if (obj === null || obj === undefined) return null;

  if (typeof obj !== "object") {
    return obj;
  }
  let keys = Object.keys(obj);
  let newobj = {};
  // 解决方案：
  for (let i in obj) {
    if (Object.hasOwnProperty.call(obj, i)) {
      newobj[i] = clone(obj[i]);
    }
  }
  return newobj;
}

// 深拷贝参考：
// https://juejin.im/post/6844903929705136141#heading-1
function clone2(obj) {
  if (obj === null || obj === undefined) return null;
  if (typeof obj === "function") {
    // 函数需要拷贝
  }
  if (typeof obj !== "object") return obj;
  if (
    Object.prototype.toString.call(obj) === "[object Array]" ||
    Object.prototype.toString.call(obj) === "[object Date]" ||
    Object.prototype.toString.call(obj) === "[object RegExp]"
  ) {
    return obj;
  }
  let new_obj = {};
  if (Object.prototype.toString.call(obj) === "[object Array]") {
    new_obj = [];
  }
  Object.keys(obj).forEach((key) => {
    new_obj[key] = clone2(obj[key]);
  });
  return new_obj;
}
let a = {
  name: "a",
  id: "a_id",
  time: new Date(),
  regParam: new RegExp(/^a[0-9]+/g),
  //   data: {
  //     time: 2020,
  //     label: "test",
  //     owner: {
  //       number: "001",
  //       print() {
  //         console.log("print func");
  //       },
  //     },
  //   },
};
// let b = clone2(a);
// console.log(b);
function test() {
  console.log("test", 67);
}
// console.log(test.toString(), 69);
let testnew = eval(test);
// let testnew = new Function(test.toString());
console.log(testnew, 71);
testnew();
testnew = function () {
  console.log("testnew", 74);
};
testnew();
test();
// b.data.owner.number = "002";
// console.log("a", a.data.owner);
// console.log("b", b.data.owner);
function compare(a, b) {
  if ((a === null || a === "undefined") && (a === null || a === "undefined"))
    return true;
  if (a === null || a === "undefined" || a === null || a === "undefined")
    return false;
  if (typeof a === "function" || typeof b === "function") return false;
  if (typeof a !== "object" && typeof b !== "object") return a === b;
  if (!(typeof a === "object" && typeof b === "object")) return false;
  if (Object.keys(a).sort().join("") !== Object.keys(b).sort().join(""))
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
