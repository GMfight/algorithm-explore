// 类数组转数组
let obj = {1:222, 2:123, 5:888};
obj.length=12;
let arr=Array.from(obj)
let res={}
for(let i in arr){
    res[Number(i)+1]=arr[i]===undefined?0:arr[i]
}
// console.log(res,9)
// 类数组：有length属性。有push方法，length属性，默认为类数组。push时在length后push
// Array.from：类数组转数组
// 1.数组旋转
// 1）一位数组移动指定位置