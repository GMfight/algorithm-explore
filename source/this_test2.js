// 1.构造函数和原型测试
var a = function() {
  this.b = 3;
};
var c = new a();
a.prototype.b = 9;
var b = 7;
a();
console.log(b); //3
console.log(c.b); //3
// 1）构造函数和构造函数原型属性重复时，构造函数优先级更高；
// 2）构造函数作为普通函数使用时：严格模式下，调用this无相应；非严格模式，指全局/调用函数时的作用域
//2. epeat 实现，使用JS实现一个repeat方法，调用这个 repeatedFunc("hellworld")，会alert4次 helloworld, 每次间隔3秒
function repeat(func, times, wait) {
  // setTimeout()
  func(times, new Date().getTime(), 18);
  if (times > 1) {
    setTimeout(() => {
      repeat(func, times - 1, wait);
    }, 3000);
  }
}
const repeatFunc = repeat(console.log, 4, 3000);
// 3.hash表结构，解决冲突的办法，hash函数有什么类型
