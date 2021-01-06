// function replaceSpace(str){
//     return str.replace(/\s+/g,'%2d');
// }

// console.log(replaceSpace('this is  a'))

function revereStr(str){
    let arr=str.split(' ');
    let resultStr=''
    for(let i=0;i<arr.length;i++){
        if(!arr[i]){
            resultStr+=' '
        }else{
            if(i===arr.length-1) resultStr+=arr[i].split('').reverse().join('')
            else{
                
            }
            
        }
    }
    return resultStr;
}
//this is a;
// console.log(revereStr('this is a'),1);
// console.log(revereStr('this is a'),1);
// console.log(revereStr(' this is a '),1);
// console.log(' this is a '.split(' '),27)
let startIndex=0,endIndex=3;
let arr=[1,2,3,4]
for(let i=startIndex,j=endIndex;i<=j;){
    let tmp=arr[j];
    arr[j]=arr[i];
    arr[i]=tmp;
    i++;
    j--;
}
console.log(arr);