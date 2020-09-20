function myPromise(callback) {
  this.state = "pending";
  this.res = "";
  this.reason = "";
  this.tasks = [];

  this.resolve = (res) => {
    if (this.state === "pending") {
      this.state = "fulfil";
      this.res = res;
      if (this.tasks && this.tasks.length > 0) {
        // console.log(this.tasks, 12);
        let curTask = this.tasks.shift();
        // console.log(curTask, 13);
        curTask(res);
      }
    }
  };
  this.then = (callback) => {
    return new myPromise((resolve) => {
      this.tasks.push((param) => {
        let res = callback(param);
        resolve(res);
      });
    });
  };
  callback(this.resolve, this.reject);
}

myPromise.prototype.reject = function (res) {
  if (this.state === "pending") {
    this.state = "reject";
    this.reson = reson;
  }
};
// 问题：如何知道函数执行结束?回调函数，自己会调用resolve

let p1 = new myPromise((resolve, reject) => {
  console.log("async1 execute", 11, new Date().getTime());
  setTimeout(() => {
    return resolve("task1 finish");
  }, 2000);
});
// console.log(p1, 44);
let p2 = p1
  .then((res) => {
    console.log("async2 execute", "26", res, new Date().getTime());
    return "task2 finish";
  })
  .then((res) => {
    console.log("async3 execute", "28", res, new Date().getTime());

    setTimeout(() => {
      console.log("async3 settimeout execute", "54", new Date().getTime());
    }, 4000);
    return "task";
  })
  .then(() => {
    console.log("async4 execute", "59", new Date().getTime());
  });
