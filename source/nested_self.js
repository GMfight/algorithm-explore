// 1）实现get函数，用来获取深浅套对象值
// var object = { 'a': [{ 'b': { 'c': 3 } }] };
// get(object, 'a[0].b.c');
//应该返回 3

function myGet(obj, keyStr) {
  let keyArr = keyStr.match(/\w+(?=(\.|\]|\[|\b))/g);
  console.log(keyArr, 8);
  let curObj = obj;

  for (let i in keyArr) {
    let key = keyArr[i];
    curObj = curObj[key];
    // console.log("key", key, "curObj", curObj);
    if (!curObj) return null;
  }
  return curObj;
}
let obj1 = {
  info: {
    items: [
      {
        id: 123,
      },
    ],
    label: "myget test",
  },
  text: "myget test 1",
};
console.log(myGet(obj1, "info.items[0].id"), 28);
// let getStr = "a[0].b.c";
// console.log(getStr.split(/(\.|\[|\]/g));
// js正则，匹配包围在【】或者.的数据
// console.log(getStr.match(/\w+(?=(\.|\]|\[|\b))/g));
