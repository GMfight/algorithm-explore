// 不可枚举属性遍历
let enobj = {
  id: "enobj",
  label: "可枚举",
};
Object.defineProperty(enobj, "text", {
  value: "不可枚举",
});
// 遍历不到不可枚举属性
// console.log(Object.keys(enobj), 9);
// // 可访问到
// console.log(Object.getOwnPropertyNames(enobj), 10);

function SuperType() {
  this.type = "super";
}
SuperType.prototype.age = "13";
let superObj = new SuperType();
console.log(Object.keys(superObj), 19);
console.log(Object.getOwnPropertyNames(superObj), 20);
for (let i in superObj) {
  console.log(i, 22);
}
