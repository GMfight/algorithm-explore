// this指向测试
function func1() {
  this.id = "123";
  this.name = "aaa";
}
let funObj1 = new func1();
// console.log(name, 6)
// console.log(funObj1.name)
// func1()
// console.log(name)

function Foo() {
  getName = function() {
    console.log(1);
  };
  return this;
}
Foo.getName = function() {
  console.log(2);
};
Foo.prototype.getName = function() {
  console.log(3);
};
var getName = function() {
  console.log(4);
};
function getName() {
  console.log(5);
}
//请写出以下输出结果：
// Foo.getName(); //2
// getName(); //4
// Foo().getName(); //1
// getName(); //1
// new Foo.getName(); //2
// new Foo().getName(); //3
new new Foo().getName(); //3
getName();
