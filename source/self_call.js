// 1.call的实现
let foo = {
  label: "foo",
};
function print() {
  console.log(this.label);
}
// 问题1：如何获取执行mycall的函数
// 1）利用实例的constructor指向构造函数
function MyFunction(label) {
  // this.label = label;
  console.log(this.label, "printTest1", 13);
}
let myFunc1 = new MyFunction("myFunc1");
MyFunction.prototype.myCall = function () {
  let params = Array.prototype.slice.call(arguments);
  let curObj = params[0] || Window;
  params.splice(0, 1);
  curObj.fn = this.constructor;
  curObj.fn(...params);
  delete curObj.fn;
};
let dataObj = {
  label: "dataObj",
};
myFunc1.myCall(dataObj, 'age')
// 2）利用原生对象实例，this指向当前函数
Function.prototype.myCall = function () {
  let params = Array.prototype.slice.call(arguments);
  let curObj = params[0] || Window;
  params.splice(0, 1);
  curObj.fn = this;
  eval(`curObj.fn(${params})`)
  delete curObj.fn;
}
function printTest2() {
  console.log(this.label, 'printTest2')
}
printTest2.myCall(dataObj)
// 2.传参处理
// call传参(obj, p1, p2, p3)
// 可以用扩展运算法实现
// 可以eval(`fn(${arr})`)实现
// bind传参(obj, [p1, p2, p3])

// let i = 1;
// function callTest() {
//   i++;
//   console.log(i, "i");
//   if (i < 5) {
//     arguments.callee();
//   }
// }
// callTest();
// 3.eval用法探究/扩展运算符的实现
let a = [1, 3, 4];
function evalTest() {
  console.log(arguments, 30);
}
// eval(a);
// eval(`evalTest(${a})`);
// let b = { id: "123", name: "张三", age: 32 };
// eval(`evalTest(${b})`);
