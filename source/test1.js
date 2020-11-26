// 闭包相关
// 1）
const obj = {
  name: "jscode",
  skill: ["es5", "es6"],
  say: function() {
    for (var i = 0, len = this.skill.length; i < len; i++) {
      setTimeout(() => {
        console.log("i", i, 9);
        console.log(`no:${this.name},${this.skill[i]}`);
      }, 0);
      console.log(`i:${i}`);
    }
  },
};
obj.say();
// for循环中用var和let的区别？
