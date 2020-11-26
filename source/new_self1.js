// new实现的功能
// 1.返回一个实例，如何返回构造函数的实例？
// 创建空对象，执行构造函数，初始化对象，并返回
// 2.实例传入参数会被初始化

// 3.访问到构造函数的属性
// 用构造函数初始化
// 4.访问到ptototype的属性
//obj.__proto__ = func.prototype;
// 5.构造函数有返回对象时，实例为返回的对象

function MyFunction(label, age) {
  this.label = label;
  this.age = age;
  // return {
  //   label: `label:${Math.random()}`,
  //   age: 20
  // }
}
MyFunction.prototype.msg = 'hello myFunction'

function MyNew(func, param) {
  let obj = new Object();
  let newObj = func.call(obj, 'myNew', 12)
  obj.__proto__ = func.prototype;
  // return  obj;

  return newObj || obj;
}

let funObj = MyNew(MyFunction, 'funObj', 22)
console.log(funObj.msg, 18)
