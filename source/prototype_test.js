<<<<<<< HEAD
let label = "123";
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
// 请写出以下输出结果：
// Foo.getName(); //2
// getName(); //4
// Foo().getName(); //1
// getName(); //1
// new Foo.getName(); //2
// new Foo().getName(); //1    错误，应为3
// new new Foo().getName(); //error: not a constructor      错误，应为3

function TestObj() {
  //   this.printc = function() {
  console.log("printc");
  //   };
}
TestObj.prototype.printc = function() {
  console.log("printc", 35);
};
let res = new TestObj().printc();
console.log(res, 38);
new new TestObj().printc();
=======

function Foo() {
  getName = function () { alert(1); };
  return this;
}
Foo.getName = function () { alert(2); };
Foo.prototype.getName = function () { alert(3); };
var getName = function () { alert(4); };
function getName() { alert(5); }


//请写出以下输出结果：
Foo.getName();  //3
getName();  //5
Foo().getName();  //3
getName();  //1
new Foo.getName();  //3
new Foo().getName();//3
new new Foo().getName();  //3
>>>>>>> f5d8da352613b4af40e9c5fe33a02e8678514e28
