// 发布订阅 模式
// 调度中心
// 1.收集依赖
// 2.观察变化
// 问题：
function Dep() {
  this.watchers = [];
  this.addSub = function(watcher) {
    this.watchers.push(watcher);
  };
  //   有变化，提示更新
  this.notify = function() {
    console.log(this.watchers, 16);
    if (this.watchers) {
      this.watchers.forEach((watcher) => {
        watcher.update();
      });
    }
  };
}
// 有变化，做更新
function Watcher(key, func) {
  Dep.target = this;
  this.update = function() {
    func();
  };
  func();
}
function Vdom(obj) {
  Object.keys(obj).forEach((key) => {
    let dep = new Dep();
    let val = obj[key];
    Object.defineProperty(obj, key, {
      get: () => {
        if (Dep.target) {
          dep.addSub(Dep.target);
        }
        return val;
      },
      set: (newVal) => {
        val = newVal;
        dep.notify();
      },
    });
  });
}

let testObj = {
  id: "testObj",
  label: "发布订阅测试",
  age: 33,
};
Vdom(testObj);
let watcher1 = new Watcher("id", () => {
  console.log("id更新监听", testObj.id);
  console.log("label更新监听", testObj.label);
});

let watcher2 = new Watcher("", () => {
  console.log("id2监听", testObj.id);
});
testObj.id = "testOBj2";
