function tolower(param) {
  return param.toString().toLowerCase()
}
function addPrefix(param) {
  return `${this.name}:prefix_${param}`
}
function addSuffix(param) {
  return `${this.name}:suffix_${param}`;
}

function test1(param) {
  return addPrefix(addSuffix(tolower(param)))
}
// console.log(test1('This is Test1'))
// 1.几种情况处理
// 1）需要保留bind
// 2）异步处理
function TestObj(name) {
  this.name = name;
  this.addPrefix = addPrefix;
  this.addSuffix = addSuffix;
}
function compose() {
  let methods = Array.from(arguments)
  let result = null;
  return function (param) {
    let that = this;
    methods.forEach(method => {
      result = result ? method.bind(that)(result) : method.bind(that)(param)
    })
    return result;
  }
}

let finalTest = compose(addPrefix, addSuffix)
// finalTest('finalTest')
// this1，新函数，针对当前对象调用
// this2,新函数，用在对象中，不同实例调用

let obj1_1 = new TestObj('张三')
let compose1 = compose(obj1_1.addPrefix, obj1_1.addSuffix)
// console.log(compose1.bind(obj1_1)('百家姓'))
function TestObj2(name) {
  this.name = name;
  this.refact = compose.bind(this)(addPrefix, addSuffix)
}
let obj2_1 = new TestObj2('安娜')
let obj2_2 = new TestObj2('王贵')

// console.log(obj2_1.refact('testobj2'))
// console.log(obj2_2.refact('testobj2'))
// 异步函数
function compose2() {
  let methods = Array.from(arguments)
  let cb = async function (param) {
    let result = null;
    let that = this;
    for (let i = 0; i < methods.length; i++) {
      result = i !== 0 ? await methods[i].bind(that)(result) : await methods[i].bind(that)(param)
    }
    return result;
  }
  return cb;
}

function asyncPrefix(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(`prefix_${name}`)
    }, 1000)
  })
}

function asyncSuffix(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(`suffix_${name}`)
    }, 1000)
  })
}

function syncHello(param) {
  return `hello:${param}`
}
let compose3 = compose2(syncHello, asyncPrefix, asyncSuffix)
async function exe() {
  let res = await compose3('compose3')
  console.log(res, 88)
}
exe()


