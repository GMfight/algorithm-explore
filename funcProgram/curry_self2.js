let R=require('ramda');
// console.log(R.curry);
let steps=[
// (...args)=>{
//     let res=args.reduce((o1,o2)=>o1+o2,0)
//     console.log('1,res',res);
//     return res;
// },
(val)=>{
    console.log('fun 1')
    return val+3
},
(val)=>{
    console.log('fun 2')
    return val+2
},
(val)=>{
    console.log('fun 3')
    return val+3
}
]
// let composeFun=R.compose(...steps);
// console.log(composeFun(0))
function myCompose(){
    let funcList=Array.from(arguments)
    console.log(funcList,'funcList')
    return function(param){
        let res=funcList.pop()(param);
        while(funcList&&funcList.length>0){
            let curFun=funcList.pop();
            res=curFun(res)
        }
        return res;
    }
}
// console.log(myCompose(...steps)(0))
// let curryFun=R.curry(...steps);
// console.log(curryFun,38)
// console.log(curryFun(0,1,2,3),39)