// 1.bind
function bindTest(id) {
  console.log(this.name);
  console.log("id", id);
}
let bindModule = {
  id: "module",
  name: "anna",
};
// bindTest.bind(bindModule)("bind");

// 2.apply

// bindTest.apply(bindModule, ["apply"]);
// 伪数组转数组;
// var args = Array.prototype.slice.call(arguments);

// 2.call
// bindTest.call(bindModule, "call");

// 3.函数柯里化
// 4.实现instanceof
// 5.关于this指向
// 函数搜索变量时，只会在this和arguments上搜索
// 1）匿名函数，this指向window。举例：promise中使用的就是匿名函数
// 2）settimeout等函数，用了this，指向this，没用this，指向window
// 3）
var name = "test";
function promiseTest() {
  var name = "promise";
  new Promise((resolve, reject) => resolve()).then(function (resolve, reject) {
    console.log(this.name); //test
    console.log(name); //promise
  });
}
promiseTest();

function intervalTest() {
  var name = "interval";
  (function () {
    console.log(this.name, 40); //test
    console.log(name, 41); //interval
  })();
}
// intervalTest();
// 6.关于作用域
// 1）var有作用域。两个不同的函数各自申明了同一个变量，那么该变量只在各自的函数体内起作用
// 2）var，内部函数和外部函数的变量名重名，JavaScript的函数在查找变量时从自身函数定义开始，从“内”向“外”查找。如果内部函数定义了与外部函数重名的变量，则内部函数的变量将“屏蔽”外部函数的变量

var age = 20;
var f = function () {
  var age = 40,
    name = "anna";
  console.log(this.age, 28);
  console.log(age);
};
f();
console.log(age, 31);
console.log(name, 36);
