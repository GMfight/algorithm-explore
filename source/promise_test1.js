let a=new Promise((resolve,reject)=>{
    console.log('exe 1');
    // throw Error('123')
    reject('1')
}).then(res=>{
    console.log(res,'resolve',5)
},rej=>{
    console.log(rej,'reject')
}).catch(error=>{
    console.log(error,9)
}).then(res=>{
    console.log(res,12)
},rej=>{
    console.log(rej,14)
})

// let b=new Promise((resolve,reject)=>{
//     resolve(1)
// }).then(res=>{
//     console.log(res,16)
//     return res;
// }).then(res=>{
//     console.log(res,18)
// })

// let c=new Promise((resolve,reject)=>{
//     reject(1)
// }).then(sus=>{
//     console.log(sus,25)
// },res=>{
//     console.log(res,16)
//     return res;
// }).then(sus=>{
//     console.log(sus,30)
// },rej=>{
//     console.log(res,18)
// })

// 1.then和promise初始化函数的区别
// 2.catch如何处理？catch与reject
// 1)reject后面没有then时，会执行到catch；一旦抛出异常，会调用后续的reject或者catch;
  // catch后面接then时，catch执行结束，会执行then的resolve
// 实现原理：try catch

// 2）调用reject,
// 调用了reject,会执行后面then的reject体，如果还有then链，会去执行resolve
// 参考：https://juejin.im/post/6868845482522148877

// 返回reject的情况：语法错误

// catch：throw error;
// 3.自带的resolve,reject作用？创建一个resolve或reject的promise；
// 4.promise嵌套使用 
// 5.promise值传递穿透