// bind的实现
// 1.绑定对象
// 2.返回函数可以作为构造函数
// 1）判断当前函数是否在被作为构造函数使用
// 2）返回实例
// 3)传参为bind传参和bind()()传参结合
function MyFunction(label) {
  this.label = label;
  console.log(this.label, 'MyFunction')
}
MyFunction.prototype.myBind = function (curObj) {
  curObj.fn = this.constructor;
  let cb = function (param) {
    if (this instanceof cb) {
      return new (curObj.fn)(param)
    }
    curObj.fn.call(curObj);
  }
  return cb;
}

let func1 = new MyFunction('func1')
let testData = {
  label: 'testData'
}
func1.myBind(testData)()
let bindObj1 = new (func1.myBind(testData))('bindObj1')

// 别人给出的bind实现
MyFunction.prototype.myBind2 = function (curObj) {
  let that = this.constructor;
  let cb = function () {
    return this instanceof cb ? that.call(this) : that.call(curObj)
  }
  cb.prototype = this.prototype; //?作用
  return cb;
}
// console.log(bindObj1, 25)