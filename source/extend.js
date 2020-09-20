function supertype() {
  this.colors = ["red", "blue"];
}
function subtype() {}
subtype.prototype = new supertype();
subtype.prototype.colors = "sub";
let sub1 = new subtype();
let super1 = new supertype();
// console.log('sub', sub1.colors)
// console.log('super', super1.colors)
// console.log('subconstructor', subtype.constructor)
// console.log('proto constructor', subtype.prototype.constructor)
// 1.原型链继承
// 实现
function Super1() {
  this.colors = ["1", "2"];
}
Super1.prototype.addColor = function () {
  this.colors.push("23");
};

function Sub1() {}
Sub1.prototype = new Super1();
let sub1_1 = new Sub1();
sub1_1.addColor();
let sub1_2 = new Sub1();
// console.log('sub1_2', sub1_2.colors)
// 问题：继承得到的构造函数，初始化实例，一个实例的改动，就会影响到其它实例
// 2.借用构造函数（prototype上的方法，获取不到。构造函数中的函数复用没有实现）
// 实现
function A() {
  this.name = "a";
}
A.prototype.id = "a1";
function B() {
  A.call(this);
}
let b = new B();
// console.log(b.name, 26) //a
// console.log(b.id, 23) //undefined
// 3.组合继承
// 实现
function Super3() {
  this.colors = ["red"];
}
Super3.prototype.name = "super3";
Super3.prototype.addColor = function (param) {
  this.colors.push(param);
};
function Sub3() {
  Super3.call(this);
}
Sub3.prototype = new Super3();
Sub3.prototype.constructor = Sub3.constructor;
let sub3_1 = new Sub3();
sub3_1.addColor("blue");
// console.log(sub3_1.colors, sub3_1.name, 'sub3_1')
// 缺点：会调用两次超类构造函数
let sub3_2 = new Sub3();
// console.log(sub3_2.colors, sub3_2.name, 'sub3_2')
// 4.原型式继承，即Object.create()实现方式
function obj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
function Super4() {
  this.id = "4";
}
Super4.prototype.color = ["12"];
let sub4 = obj(Super4.prototype);
// console.log(sub4.id)  //undefined
// console.log(sub4.color) //【’12']
// 缺点：构造函数内的部分继承不到

// 5.寄生式

// 6.寄生组合式
function Super6() {
  this.name = "super6";
}
function Sub6() {
  Super6.call(this);
  this.id = "sub6";
}
Super6.prototype.color = ["22"];
function inheritPrototype(subType, superType) {
  let proto = obj(superType.prototype);
  // let proto = Object.create(superType).prototype
  proto.constructor = subType;
  subType.prototype = proto;
}
inheritPrototype(Sub6, Super6);
let sub6_1 = new Sub6();
console.log(sub6_1.id, sub6_1.name, sub6_1.color, 95);
// 7.es6的继承extend实现
