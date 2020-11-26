function A(label,age){
    this.label=label;
    this.age=age;
    this.printInfo=function(){
        console.log('label',this.label)
    }
}
let aObj=new A('a',10)
aObj.printInfo()