// commonjs实现es import
function commont2Es(){
    return new Promise((resolve,reject)=>{
        let a=require('');
        resolve(a)
    })
}
// common
let a=require('');
console.log(a)
// es
import('').then(a=>{
    console.log('a',a)
})
// 区别：
// 1）导出方式。cjs导出obj，挂载在一个变量上；ejs导出{obj,obj}
// 2）导入方式。cjs导入obj，同步实现；ejs导入{obj,obj}
// 参考：

// function webpack_require(exports,name,getter){
//     Object.defineProperty(exports,name,{enumerable:true,get:getter})
// }
// function webpack_exports(){

// }