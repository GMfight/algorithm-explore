// 深拷贝部分的Object.create
function myCreate(obj){
    if(obj===null) return null;
    if(obj===undefined) return obj;
    let typeOfVal=typeof obj;
    if(typeOfVal==='number'||typeOfVal==='string'||typeOfVal==='boolean'||typeOfVal==='symbol') return obj;

    if(Object.prototype.toString.call(obj)==='[object RegExp]'){
        // console.log(obj.source,8)
        return new RegExp(obj.source,obj.flags);
    }
    if(Object.prototype.toString.call(obj)==='[object Date]'){
        // console.log(obj,12)
        return new Date(obj.getTime());
    }
    let res;


    if(Object.prototype.toString.call(obj)==='[object Array]'){
        res=[]
    }else{
        res={}
    }
    for(let i in obj){
        if(obj[i]===obj){
            res[i]=res;
            continue;
        }
        res[i]=myCreate(obj[i]);
    }
    return res;
}

// let a=new Date();
// let b=myCreate(a)
// // console.log(b,'27')
// a=new Date(new Date().getTime()+10000)
// console.log(a);
// console.log(b,31)

// let c=/\w*/g
// let d=myCreate(c);
// c=/\d*/g
// console.log(c,'c')
// console.log(d,'d')

// let a1=[1,{id:2},3,4];
// let a2=myCreate(a1);
// a1[1].id=5;
// console.log(a1)
// console.log(a2)

// 与继承和原型相关的Object.create;
function myCreate2(obj){
    let f=function(){}
    f.prototype=obj;
    let newObj=new f();
    return newobj
}
