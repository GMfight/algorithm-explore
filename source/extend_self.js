// function MyClass(funcP){

// }
// es5继承的实现方式
// 1.组合继承；缺陷：Super1被new了两次
function Super1(age){
    this.age=age;
}
Super1.prototype.label='super';
function Sub1(age,level){
    Super1.bind(this)(age)
    this.level=level;
}
Sub1.prototype=new Super1();

let obj1=new Sub1('obj1',2);
// console.log(Object.getOwnPropertyNames(obj1),16)

function Super2(age){
    
}