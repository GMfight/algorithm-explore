// 1.发布订阅模式和观察者模式区别
// 订阅发布模式时观察者的演化。多了调度中心，让发布者和订阅着通过这里沟通
// eventEmitter是观察者模式
// 第一版：
// 问题：1.之前做的事件注册会被覆盖（每个类型事件，用列表存储）
// 2.每次声明一个eventbus，会执行一次on和emit初始化（构造函数使用原型声明）
// 补充
// 1.once和off实现
function EventRegister() {
  this.eventArr = [];
  // 注册监听
  this.on = function(name, func) {
    this.eventArr[name] = func;
  };
  this.emit = function(name, param) {
    if (this.eventArr[name]) {
      let func = this.eventArr[name];
      func.bind(this)(param);
    }
  };
  this.once = function(name, func) {
    this.on(name, function() {
      func.bind(this)(params);
      // 卸载监听;
      this.eventArr[name] = null;
      // this.on(name, {});
    });
  };
  this.off = function(name) {
    this.eventArr[name] = null;
  };
}
let eventObj1 = new EventRegister();

eventObj1.on("print", (param) => {
  console.log("print", param, 20);
});

eventObj1.emit("print", {
  id: 24,
  label: "print1",
});
// function ReferObj(label) {
//   this.label = label
//   this.print = function () {
//     eventObj1.on('console', (function (param) {
//       console.log('console：', this.label, param, 16)
//     }).bind(this))
//   }
// }

// let observer1 = new ReferObj('observer1')
// observer1.print()

// function SubScribe(label) {
//   this.label = label;
//   this.reciveLabl = function () {
//     eventObj1.emit('console', { label: this.label })
//   }
// }
// let sub1 = new SubScribe('sub1')
// sub1.reciveLabl()

// eventObj1.emit('console', { id: 1, name: 'obj1' })
