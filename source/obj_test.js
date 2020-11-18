function Super(msg){
    this.msg=msg;
}
Super.prototype.msg='Super'
let o1=new Super('o1');
console.log(o1.msg,'6')