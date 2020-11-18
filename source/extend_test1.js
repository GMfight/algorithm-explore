function SuperFun(label) {
  //   console.log(label, 2);
  this.label = label;
  console.log(this.label);
}
SuperFun.prototype.getNew = function(label) {
  return new this.constructor(label);
};
SuperFun.prototype.print = function(label) {
  console.log("print Super", this.label);
};


function SubFun() {
  let args = Array.prototype.slice.call(arguments);
  SuperFun.call(this, ...args);
}
SubFun.prototype = Object.create(SuperFun.prototype);
SubFun.prototype.print = function() {
  console.log("print", this.label);
};
SubFun.prototype.constructor = SubFun;
let subObj = new SubFun();
let subObj2 = subObj.getNew("subObj2");
// subObj2.print();
let superObj1=new SuperFun('superObj1')
superObj1.print();
