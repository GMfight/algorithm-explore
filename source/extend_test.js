function SuperObj(label) {
  this.label = label;
  console.log(this.label, "SuperObj");
}
SuperObj.prototype.createNew = function() {
  console.log(this.constructor, 6);
};

function SubObj(label) {
  console.log(label, 7);
  this.subLabel = label;
  console.log(this.subLabel, "SubObj");
}
// console.log(SubObj === SubObj.prototype.constructor, 11);

SubObj.prototype = new SuperObj("SubObj");
let subInstance1 = new SubObj("instance1");
// console.log(subInstance1.constructor === SubObj, 15); //false
// console.log(subInstance1.constructor === SuperObj, 18); //true

// console.log(SubObj.constructor === SubObj, 20);
// console.log(SubObj.constructor === SuperObj, 21);
// console.log(
let fn = SubObj.constructor;
fn("sub20");
// console.log(fn, 20);
// fn.call(this, "sub24");
// );
