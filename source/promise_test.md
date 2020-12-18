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
// resolve(1)
// }).then(res=>{
// console.log(res,16)
// return res;
// }).then(res=>{
// console.log(res,18)
// })

// let c=new Promise((resolve,reject)=>{
// reject(1)
// }).then(sus=>{
// console.log(sus,25)
// },res=>{
// console.log(res,16)
// return res;
// }).then(sus=>{
// console.log(sus,30)
// },rej=>{
// console.log(res,18)
// })

// 1.then 和 promise 初始化函数的区别
// 2.catch 如何处理？catch 与 reject
1)reject 后面没有 then 时，会执行到 catch；
一旦抛出异常，会调用后续的 reject 或者 catch;
catch 后面接 then 时，catch 执行结束，会执行 then 的 resolve
// 实现原理：try catch

// 2）调用 reject,
// 调用了 reject,会执行后面 then 的 reject 体，如果还有 then 链，会去执行 resolve
// 参考：https://juejin.im/post/6868845482522148877

// 返回 reject 的情况：语法错误

// catch：throw error;
// 3.自带的 resolve,reject 作用？创建一个 resolve 或 reject 的 promise；
// 4.promise 嵌套使用
// 5.promise 值传递穿透
