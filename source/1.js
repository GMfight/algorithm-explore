// [a,1] [b,5]

// [b,2] [c,3]
// console.log(findCommon(0,0,1,1,0,3,1,4))
function findCommon(aw_s,ah_s,aw_e,ah_e,bw_s,bh_s,bw_e,bh_e){
    // a覆盖b
    if(aw_s<=bw_s&&ah_s<=bh_s&&ah_e>=bh_e&&aw_e>=bw_e){
        return [[bw_s,bh_s],[bw_e,bh_e]]
    };
    // b覆盖a

    if(aw_s>=bw_s&&ah_s>=bh_s&&ah_e<=bh_e&&aw_e<=bw_e){
        return [[aw_s,ah_s],[aw_e,ah_e]]
    };
    // 没有覆盖区域 
    if(aw_e<=bw_s||bw_e<=aw_s||ah_e<=bh_s||bh_e<=ah_s){
        console.log('empty')
        return null;
    }
    let start_w,start_h,end_w,end_h;
    start_w=Math.max(aw_s,bw_s);
    end_w=Math.min(aw_e,bw_e);
    start_h=Math.max(bh_s,ah_s);
    end_h=Math.min(ah_e,bh_e);
    return [[start_w,start_h],[end_w,end_h]];
    // if(aw_s<=bw_s){
    //     start_w=bw_s;
    // }else{
    //     start_w=aw_s;
    // }
    // if(aw_e<=bw_e){
    //     end_w=aw_e;
    // }else{
    //     end_w=bw_e;
    // }
    // if(ah_s<=bh_s){
    //     start_h=bh_s;
    // }else{
    //     start_h=ah_s;
    // }
    // if(ah_e<=bh_e){
    //     end_h=ah_e;
    // }else{
    //     end_h=bh_e;
    // }
    // start_w=Math.min()
}
// console.log('AMJ'.charCodeAt(0),41)

function splitStr(str){
    let wStr=str.match(/[A-Z]+/g)
    return wStr;
}
console.log(splitStr('AMJ1'),54)

function decodeStr(str){
    let wStr=str.match(/[A-Z]+/g)[0];
  	let hStr=str.match(/[0-9]+/g)[0];
      let wNum=0,wIndex=wStr.length-1;
  	while(wIndex>=0){
        wNum+=wStr[wIndex].charCodeAt(0)-64;
      wIndex--;
    }
    if(wStr.length>1){

        wNum+=Math.pow(10,wStr.length)
    }
      
  return [wNum,Number(hStr)];
}
console.log(decodeStr('A1'),'66_a');
// console.log(decodeStr('Z'),'66_a');
// console.log('A'.charCodeAt(0)-64,41)
// console.log('M'.charCodeAt(0)-64,41)
// console.log('J'.charCodeAt(0)-64,41)

function encodeStr(num,num_h){
    let strLen=num.length;
    if(num<=26) return [String.fromCharCode(num_w+64),num_h];
    let numIndex=0;
    num=num-Math.pow(10,num.length-1);
    let res='';
    while(num>0&&numIndex<strLen){
        if(num<=26){
            res+=String.fromCharCode(num+64)
            num=0;
            continue;
        } 
        res+=''

    }
}
// console.log(encodeStr(27),'81_c')
console.log(String.fromCharCode(100),'_76')


// console.log('Hello World!');
// function getValue(obj,path){
//     let arr=path.split('.');
//    let keyIndex= Object.keys(obj).findIndex=(o=>{
//         if(o===arr[0]){
//             if(arr.length===1) return true;
//             if(Object.prototype.toString(obj[o])==='[Object object]'){
//                 return getValue(obj[o],arr.slice(1,arr.length).join('.'))
//             }
//         }
//     })
//    if(keyIndex>=0) return true;
//     return false;
// }