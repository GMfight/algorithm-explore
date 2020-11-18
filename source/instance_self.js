// 1.用法；
// 1）instanceof 用来判断一个对象是否是另一对象的实例
// 2）instanceof只会追溯左边的原型链；不会追溯右边；
// 3）Object对象是由Function创建的
function Super(num){
    this.num=num;
}
let obj1=new Super('1')
let obj2=new Super(2)
// if(obj1 instanceof obj2){
//     console.log(true);
// }
// 实现instanceof
function myInstanceOf(obj,Con){
    let leftProto=obj.__proto__;
    let rightProto=Con.prototype;
    while(true){
        if(leftProto===null) return false;
        if(leftProto===rightProto){
            return true;
        }
        leftProto=leftProto.__proto__;
    }
}
console.log(myInstanceOf(obj1,obj2),'18')