function MyPromise(func){
    this.state='pending';
    this.eTasks=[]
    this.rTasks=[]
    this.res;
    this.res=func(this.resolve.bind(this),this.reject.bind(this));
}
// 修改任务状态，继续链式调用
MyPromise.prototype.resolve=function(){
    this.state='resolve'
    this.rTasks&&this.rTasks.every(o=>{
        o(this.res);
    })
}
MyPromise.prototype.reject=function(){
    this.state='reject'
    this.eTasks&&this.eTasks.every(o=>{
        o(this.res);
    })
}
// 添加链式调用，返回promise
MyPromise.prototype.then=function(rTask,eTask){
    let that=this;
    return new Promise((resolve,reject)=>{
        if(that.state==='resolve'){
            if(typeof rTask !=='function'){
                return resolve(that.res)
            }
            return resolve(rTask(that.res))
        }
        if(that.state==='reject'){
            if(typeof eTask !=='function'){
                return resolve(that.res)

            }
            return resolve(eTask(that.res))
        }
        that.rTasks.push((param)=>{
            resolve(rTask(param));
        })
        that.eTasks.push((param)=>{
            resolve(eTask(param));
        })
    })
    
}
// 添加成功或被拒绝的promise
MyPromise.resolve=function(val){
    return new Promise((resolve,reject)=>{
        resolve(val)
    })
}
MyPromise.reject=function(val){
    return new Promise((resolve,reject)=>{
        reject(val)
    })
}
// finally实现思路：无论resolve还是reject，都调用settimeout执行；

// MyPromise.prototype.catch=function(errFunc){
//     let that=this;
//     return new MyPromise((resolve,reject)=>{
//         if(that.state==='reject'){
//             return resolve(errFunc(that.res))
//         }
//         else if(that.state==='pending'){
//             that.rTasks.push((param)=>{
//                 resolve(errFunc(param))
//             })
//         }
//     })
// }
// 异常处理
MyPromise.prototype.catch=function(errFunc){
    return this.then(null,errFunc)
}

let p1=new MyPromise((resolve,reject)=>{
    console.log('123')
    reject(1)
})
p1.then(res=>{

    console.log(res,50)
    return res;
},rej=>{
    console.log(rej,52)
    return rej
}).then(res=>{
    console.log(res,54)
},rej=>{
    console.log(rej,56)
})

// function Super(id,names){
//     this.id=id;
//     this.names=[1,2,3]
// }
// Super.prototype.visitName=function(){
//     console.log(this.names,69)
// }
// let obj1=new Super('obj1','');
// obj1.visitName()