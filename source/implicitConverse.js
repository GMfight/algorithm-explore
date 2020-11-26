// 隐式转换
// 1.符合条件的a
// let a = true;
let count = 0;
let obj = {};
Object.defineProperty(obj, "a", {
  get() {
    let return_a = count === 0 ? 1 : count === 1 ? 2 : 3;
    count++;
    return return_a;
  },
});
// console.log(a, 9);
console.log(obj.a == 1 && obj.a == 2 && (obj.a == 3) == true);
// console.log(a == 1 && a == 2);
