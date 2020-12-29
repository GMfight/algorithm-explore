// 1.从1000到990000找到所有的对称整数1001、1111、1221、1331....12321.
function findNums(start,end){
    let s=(start+'').split(''),e=(end+'').split('');
    let res=[]
    // console.log('slen',s.length,'elen',e.length)
    for(let len=s.length;len<=e.length;len++){
        let curRes=[]
        let i=0,j=len-1;
        let flag=len===e.length?true:false

        for(let m=1;m<10;m++){
            if(flag){
                // console.log('i',i,'j',j)
                if(e[i]<m||(e[i]==m&&e[j]<m)){
                    // console.log('continue')
                    continue;
                }
            }
            
            curRes.push([m,m])
        }
        i++;
        j--;
        // console.log('len',len,'flag',flag)
        while(i<=j){
            let newRes=[]
            for(let m=0;m<10;m++){
                if(flag){
                    // console.log('i',i,'j',j,'ei',e[i],'ej',e[j],'m',m)
                    if(e[i]<m||(e[i]==m&&e[j]<m)){
                        console.log('continue')
                        continue;
                    }
                }
                let newArr=i===j?[m]:[m,m]
                let a=curRes.map(cur=>{
                    let before=cur.slice(0,i)
                    let after=cur.slice(i,cur.length);
                    return [...before,...newArr,...after]
                })
                newRes.push(...a)
            }
            curRes=newRes;
            i++;
            j--;
        }
        res.push(...curRes)
        // console.log('len',len,'curRes',curRes)
    }
    console.log(res)
}
// findNums(1000,990000)
// 2.最长公共前缀

// 3.最长子串

// 4.大数相乘

function multipleArr(astr,bstr){
    let arr=(astr+'').split(''),brr=(bstr+'').split('');
    let addArr=[]
    for(let i=arr.length-1;i>=0;i--){
        let nextVal=0;
        let curRes=[]
        for(let m=i;m<arr.length-1;m++){
            curRes.push(0)
        }
        for(let j=brr.length-1;j>=0;j--){
            let val=arr[i]*brr[j]+nextVal;
            nextVal=Math.floor(val/10);
            curRes.unshift(val%10)
        }
        addArr.push(curRes)
    }
    console.log(addArr)
    multipleAdd(...addArr)

}
// 两个大数相乘
function multipleAdd(arr,brr){
    // console.log('arr',arr,'brr',brr)
    let aIndex=arr.length-1,bIndex=brr.length-1;
    let nextVal=0,res=[];
    while(aIndex>=0||bIndex>=0){

        let val
        if(aIndex<0){
            val=brr[bIndex]+nextVal;
        }else if(bIndex<0){
            val=arr[aIndex]+nextVal;
        }else{
            val=arr[aIndex]+brr[bIndex]+nextVal;

        }
        res.unshift(val%10);
        nextVal=Math.floor(val/10);
        aIndex--;
        bIndex--;
    }
    if(nextVal>0){
        res.unshift(nextVal)
    }
    console.log(res)

}
// multipleArr(12,111)