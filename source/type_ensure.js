// js类型判读
let obj1 = { id: "a", name: "a1" };
let arr1 = [1, 3, 5, 6];
let date1 = new Date();
let reg1 = new RegExp(/^a[0-9]+/g);
console.log(typeof obj1, "typeof object", 3);
console.log(typeof arr1, "typeof Array", 4);
console.log(obj1 instanceof Object, "instance object", 5);
console.log(arr1 instanceof Array, "instance Array", 6);
console.log(Object.prototype.toString.call(arr1), "toString", 7);
console.log(arr1.constructor === Array, "constructor object", 8);
arr1 = {
  id: "b",
  name: "b1",
};
console.log(arr1 instanceof Object, "instance object", 11);
console.log(arr1 instanceof Array, "instance Array", 12);
console.log(date1 instanceof Date, "instance Date", 14);
console.log(Object.prototype.toString.call(arr1), "toString", 17);
console.log(arr1.constructor === Array, "constructor array", 18);
console.log(Object.prototype.toString.call(reg1), "toString", 21);
