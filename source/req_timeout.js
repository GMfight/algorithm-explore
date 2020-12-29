const { times } = require("lodash");

// 请求超时处理
function timeoutReq(url,time){
    return new Promise((resolve,reject)=>{
        let timerTask=setTimeout(()=>{
            resolve(false);
        },time)
        executeReq(url).then((res)=>{
            clearTimeout(timerTask)
            resolve(res);
        })
    })
}

function executeReq(){
    return new Promise((resolve,reject)=>{
    //     let curTime=Math.floor(Math.random()*3000);
    //     console.log('curTime',curTime)
    //    setTimeout(()=>{
    //        resolve(true)
    //    },curTime) 
        fetch('https://www.v2ex.com/go/shenzhen').then(res=>{
            console.log('res',res)
        })
    })
}

function reqLimit(url,time,count){
    return new Promise(async (resolve,reject)=>{
        let res=await timeoutReq(url,time)
        count--;
        if(!res){
            console.log('res',res,'count',count)
            if(count>0){
                res=await reqLimit(url,time,count);
            }
            resolve(res);
        }
        resolve(res);
    })
}

reqLimit('',1000*1,3).then(res=>{
    console.log('res success',res)
})