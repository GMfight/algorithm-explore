// 1.创建对象
// 2.执行函数（this，指向新对象）
// 3.函数原型挂载到新对象上
// 4.返回对象
function myNew(func){
    let newObj=new Object();
    let params=Array.from(new Set(arguments))
    params=params.slice(1,params.length);
    let res=func.bind(newObj)(...params);
    if(res!==null&&typeof res==='object'){
        return res;
    }
    Object.setPrototype(newObj,func.prototype)
    return newObj;

}

// Object.create特色
// 1）传入null时，返回也是null，不继承Object上任何属性

function myObjCreate(param){
    if(param===null) return null;
    let obj={};
    Object.setPrototypeOf(obj,param);
    return obj;
}
let objA={
    id:'obja',
    name:'anna'
}
let obj1=myObjCreate(objA)
console.log(obj1.id,32)
obj1.id='obj1'
console.log(obj1.id,34)