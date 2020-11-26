// new的各种用法
function newFun() {
  console.log();
}

// 1.构造函数，每次new的时候+1
let addFun = (function() {
  let count = 0;
  let cb = function(label) {
    if (this instanceof addFun) {
      //   console.log("constructor", 11);
      count++;
    }
    this.label = label;
    // console.log("label", this.label, "count", count, 13);
  };
  return cb;
})();

let addFunObj1 = new addFun("addFunobj1");

let addFunObj2 = new addFun("addFunobj2");
addFun("addFun3");
