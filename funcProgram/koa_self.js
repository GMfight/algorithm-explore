// 问题
// 1.如何所有use之后再next
// 2.洋葱式和compose的区别
// 3.next如何初始化，且层层传递？
function MyKoa(){
    this.funcList=[]
    this.curFunIndex=0;
    this.context=['context']
}
MyKoa.prototype.use=function(func){
    new Promise((resolve,reject)=>{
        this.funcList.push(func);
        if(this.funcList.length===1){
            resolve();
        }
    }).then(()=>{
        this.next();
    })
}
MyKoa.prototype.next=function(){
    // console.log('next Execute,curFuncIndex',this.curFunIndex)
    let curFun=this.funcList[this.curFunIndex];
    this.curFunIndex++;
    curFun(this.context,this.next.bind(this));
}
let koaObj1=new MyKoa();
koaObj1.use((ctx,next)=>{
    console.log('print 1')
    ctx.push('print1')
    next()
})
koaObj1.use((ctx,next)=>{
    console.log('print 2')
    ctx.push('print2')
    next()
})
koaObj1.use((ctx,next)=>{
    ctx.push('print3')
    console.log('print 3')
    console.log('ctx',ctx)
})


