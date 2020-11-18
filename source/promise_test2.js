// 微任务中创建微任务
// 每调用一次resolve（只用调用resolve时），会将相应的then函数执行放到任务队列中

new Promise((resolve,reject)=>{
    console.log(1);
    new Promise((res1,rej1)=>{
        console.log(2)
        res1()
    }).then(()=>{
        console.log(3)
        new Promise((resolve,reject)=>resolve()).then(()=>{
            console.log(11)
        })
    })
    resolve();
}).then(()=>{
    console.log(4);
});
new Promise((resolve,reject)=>{
    console.log(5)
    
    resolve()
}).then(()=>{
    console.log(6)
});
setTimeout(()=>{
    console.log(8)
},0)
console.log(10)