// 柯里化介绍：
// 用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数
// 问题：
// 1.this丟失
function curryFun(func) {
  let paramLen = func.length,
    paramList = [];
  curResult = null;
  let cb = function() {
    // console.log(this, 10)
    let args = Array.from(arguments);
    paramList.push(...args);
    if (paramList.length >= paramLen) {
      return func.bind(this)(...paramList);
    } else {
      return cb.bind(this);
    }
  };
  return cb;
}

function curryFun2(func) {}

function printName(a, b, c, d) {
  let args = Array.from(arguments);
  let result = args.join("_");
  return `${this.name}_${result}`;
}
// 第一种this丢失，通过调用时绑定bind可以避免
let TestData = function(name) {
  this.name = name;
  this.print = function(a, b, c, d, e) {
    return `${this.name}:${a}_${b}_${c}_${d}_${e}`;
  };
};
let testObj1 = new TestData("张三");
let testObj2 = new TestData("李四");
let testPrint1 = curryFun(testObj1.print);
let testPrint1Res = testPrint1.bind(testObj1)(1)(3)(5, 7)(9);
console.log(testPrint1Res);

// let testPrint2 = curryFun(testObj1.print.bind(testObj2))
// let testPrint2Res = testPrint2(2)(4)(6, 8)(0)
// console.log(testPrint2Res);
// 第二种this丢失
// let testPrint = curryFun(printName)
// function MyObj(name) {
//   this.name = name;
//   this.print = testPrint
// }
// let myobj1 = new MyObj('张三')
// console.log(myobj1.print('1')('2', '3')('4', '5'))
// let myobj2 = new MyObj('李四')
// console.log(myobj2.print('6', '7', '8', '9', '0'))
