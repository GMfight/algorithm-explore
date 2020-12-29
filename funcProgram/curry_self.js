function myChain(){
    let args=Array.from(arguments);
    let func=args[0];
    let pList=args.slice(1)
    let fIndex=pList.length-1;
    let dp=function(){
        if(fIndex>=0){
            let curP=pList[fIndex];
            curP()
            fIndex--
            dp();
        }else{
            func()
        }
        return  [...pList]
    }
    return dp();
}
function printLog(param){
    console.log('param',param)
}
function print1(){
    console.log('print 1')
}
function print2(){
    console.log('print 2')
}
function print3(){
    console.log('print 3')
}

let res=myChain(printLog,print1,print2)
myChain(printLog,...res,print3)

// 柯里化参数/执行函数