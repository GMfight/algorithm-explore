// 1.new实例化
// new.target返回当前实例化的构造函数；
// 参考：https://es6.ruanyifeng.com/#docs/class

// super方法，子类调用父类构造函数

// 静态方法
// 可以做类型判断

// 2.toString方法不可枚举
// 3.constructor方法会被默认调用；定义了con执行con，没定义con，默认添加该方法；
// 4.不支持直接调用，直接调用会抛出错误
// 5.有get和set函数，可以拦截属性存取
// 6.可以赋值给其它变量
// function myEs() {
//   this.options = Array.prototype.slice.call(arguments);
//   this.myConstructor = function(label) {
//     this.label = label;
//   };

//   if (this instanceof myEs) {
//     this.myConstructor ? this.myConstructor(this.options[0]) : null;
//   }
// }
// myEs.prototype.printName = function() {
//   console.log(this.label, 23);
// };
// let esObj1 = new myEs("esobj1");
// // esObj1.printName();

// // myEs.prototype.mySuper = function() {

// // };

// myEs.myExtend = function(options) {
//   let newCon = function() {
//     let args = Array.prototype.slice.call(arguments);
//     console.log(args, 38);
//     myEs.call(newCon, ...args);
//   };
//   newCon.prototype = Object.create(myEs.prototype);
//   newCon.prototype.constructor = newCon;
//   return newCon;
// };

// let extendClass = myEs.myExtend();

// let extendObj1 = new extendClass("extendObj 1");

// extendObj1.printName();

// function _createClass(){

// }
// 知识点：(es5)
// prototype指向构造函数的公共属性和方法
// proto指向构造函数的proto
// Object和函数的__proto__顶端是null
// extend特色
// 1.子类proto指向父类
// 2.子类prototype.proto指向父类prototype
// 3.静态方法
// 4.私有方法
function myExtends(Super,Sub){
    // let prototype=new Super()
    let prototype=Object.create(Super.prototype);
    prototype.constructor=Sub;
    Object.setPrototypeOf(prototype,Super.prototype)
    Sub.prototype=prototype;
    Object.setPrototypeOf(Sub,Super);
}
console.log(myExtends.__proto__)
console.log(Object.__proto__)
console.log(Object.prototype)


function Super1(label){
    this.label=label
}
Super1.prototype.print1=function(){
    console.log(this.label,'super1')
}
function Sub1(age,label){
    Super1.bind(this)(label);
    this.age=age;
}
myExtends(Super1,Sub1)
Sub1.prototype.print1=function(){
    console.log(this.label,'sub1')
}
// let superObj=new Super1('superobj1');
// superObj.print1();
// let subobj1=new Super1('subobj1');
// subobj1.print1();

// console.log(Sub1.__proto__===Super1,'77')
// console.log(Sub1.prototype.__proto__===Super1.prototype,'78')