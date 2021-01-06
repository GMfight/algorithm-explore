// 类似于用键值可以求解的问题
// 49 字母异分位
// ['eat','tea','nat','tan','an','na']
// [['eat'],['nat'],['an']]

function charsGroup(arr){
    let keys=[];
    for(let i=0;i<arr.length;i++){
        let key=arr[i].split('').sort().join('');
        if(keys[key]){
            keys[key].push(arr[i])
        }else{
            keys[key]=[arr[i]]
        }
    }
    return keys;
}
// console.log(charsGroup(['eat','tea','nat','tan','an','na']),19);

// 55(有限制条件的跳转) 递归回溯（性能不通过—）可借助贪婪算法
// dp[i]===arrLen-i<=arr[i]&&dp[i-1]
function randomStep(arr){
    if(arr.length===1){
        return true;
    }
    if(arr.length===2){
        if(arr[0]>=1){
            return true;
        }
        return false;
    }
    let arrLen=arr.length;
    for(let i=1;i<=arr[0];i++){
        let res=i<arrLen&&randomStep(arr.slice(i,arrLen))
        if(res) return res;
    }
    return false;
}
// dp[i]===arrLen-i<=arr[i]&&dp[i-1]
// 贪心算法
function randomStep2(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(i===0){
            max=arr[i]
            continue;
        }
        if(i<=max) {
            max=Math.max(max,i+arr[i])
        }else{
            return false;
        }
    }
    return true;
}
// console.log(randomStep([1]),'a')
// console.log(randomStep2([1,0,2]),'a')

// console.log(randomStep([3,2,1,0,4]),'b')

// [2,3,1,1,4] //true
//[3,2,1,0,4]//false
function videoStitching(arr){

}

//（64） 思路：dp[i,j]=Min(dp[i-1,j],dp[i,j-1]) 
// 用递归实现，结果：超出时间限制
// 用数组遍历实现，可
function minPathInMatrix(arr){
    let path=[]
    function dp(i,j){
        if(i===0){
            return arr[i].slice(0,j+1)
        }
        if(j===0){
            let hIndex=0;
            let res=[];
            while(hIndex<=i){
                res.push(arr[hIndex][j]);
                hIndex++;
            }
            return res;
        }
        let arr1=dp(i-1,j);
        let arr2=dp(i,j-1);
        let arr1Sum=arr1.reduce((a,b)=>a+b)
        let arr2Sum=arr2.reduce((a,b)=>a+b)
        let res=arr1Sum<arr2Sum?arr1:arr2
        res.push(arr[i][j]);
        return res;
    }
    let res=dp(arr.length-1,arr[0].length-1)
    console.log(res,69)
    return res.reduce((a,b)=>a+b);
}

function minPathInMatrix2(arr){
    function dp(i,j){
        if(i===0){
            let res=arr[i].slice(0,j+1).reduce((a,b)=>a+b)
            return res;
        }
        if(j===0){
            let hIndex=0;
            let res=0;
            while(hIndex<=i){
                res+=arr[hIndex][j]
                hIndex++;
            }
            return res;
        }
        let l1=dp(i-1,j);
        let l2=dp(i,j-1);
        return arr[i][j]+Math.min(l1,l2);
    }
    let res=dp(arr.length-1,arr[0].length-1)
    return res;
}
function minPathInMatrix3(arr){
    let dp=[],iLen=arr.length,jLen=arr[0].length;
    for(let i=0;i<iLen;i++){
        dp[i]=[]
        for(let j=0;j<jLen;j++){
            if(i===0&&j===0){
                dp[i][j]=arr[0][0]
                continue;
            }
            if(i===0){
                dp[i][j]=arr[i][j]+dp[i][j-1];
                continue;
            }
            if(j===0){
                dp[i][j]=arr[i][j]+dp[i-1][j]
                continue;
            }
            dp[i][j]=arr[i][j]+Math.min(dp[i-1][j],dp[i][j-1]);
        }

    }
    // console.log(dp,117)
    // console.log(dp[iLen-1][jLen-1],'a')
    return dp[iLen-1][jLen-1]
}

// console.log(minPathInMatrix([[1,5,2],[3,4,8],[3,4,9]]))
// [1,3,1],
// [1,5,1],
// [4,2,1]
// console.log(minPathInMatrix2([[1,3,1],[1,5,1],[4,2,1]]),'a')
minPathInMatrix3([[1,3,1],[1,5,1],[4,2,1]])

// (70）每次1-2,有多少种方案
// dp(n)=dp(n-1)+dp(n-2)
// 处理超时,将递归变形为数组遍历；
function climbStairs(n){
    if(n===1) return 1;
    if(n===2) return 2;
    return climbStairs(n-1)+climbStairs(n-2)
}

function climbStairs2(n){
    let dp=[]
    for(let i=1;i<=n;i++){
        if(i===1){
            dp[i]=1;
            continue;
        }
        if(i===2){
            dp[i]=2;
            continue;
        }
        dp[i]=dp[i-1]+dp[i-2]
    }
    // console.log(dp[n],172)
    return dp[n]

}
// climbStairs2(3)
// console.log(climbStairs2(2),'a')
// console.log(climbStairs(3),'b')
// console.log(climbStairs(4),'c')

// [
//     [1,5,2],
//     [3,4,8],
//     [3,4,9]
// ]

// (75)三个类型元素的数组，长度n，原地排序，相等值相邻，按照1，2，3顺序
function sortGroupArr(arr){
    let res=[0,0,0];
    for(let i=0;i<arr.length;i++){
        res[arr[i]]++;
    }
    console.log(res,96)
    return [...new Array(res[0]).fill(0),...new Array(res[1]).fill(1),...new Array(res[2]).fill(2),]
}
// console.log(sortGroupArr([0,2,1]),'a')
// console.log(sortGroupArr([0,1,2,0,1]),'b')
// [0,2,1]
// [0,1,2,0,1]


// 双指针法操作
function sortGroupArr2(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]<arr[j]){
                continue;
            }
            let tmp=arr[j];
            arr[j]=arr[i];
            arr[i]=tmp;
        }
    }    
    console.log(arr,118)
}
// sortGroupArr2([1,0,1,2,0,1])

// sort实现原理：折半/快排
function sortGroupArr3(arr){
    if(arr.length===1) return [arr[0]]
    let midVal=arr[0];
    let leftArr=[],rightArr=[];

    for(let i=1;i<arr.length;i++){
        if(arr[i]<midVal){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }
    // console.log(leftArr,'leftArr')
    // console.log(rightArr,'rightArr')
    let result=[]
    if(leftArr.length>0){
        leftArr=sortGroupArr3(leftArr)
        result=leftArr;
    }
    result.push(midVal);
    if(rightArr.length>0){
        rightArr=sortGroupArr3(rightArr);
        result.push(...rightArr);
    }
    return result;
}

// console.log(sortGroupArr3([0,2,1,7,4,0,1,5]),'a')
// 要求：原地修改   解决方案：字典序算法
function nextPermutation(arr){
    let arrLen=arr.length,hasChange=false;
    for(let i=arrLen-1;i>0;i--){
        if(arr[i-1]>=arr[i]) continue;
        hasChange=true;
        let j=i,curBiggerIndex=i;
        while(j<arrLen&&arr[j]>arr[i-1]){
            j++;
        }        
        let tmp=arr[i-1];
        arr[i-1]=arr[j-1]
        arr[j-1]=tmp;
        console.log('i',i,'arr',arr);
        let n=arrLen-1;
        // i及后面内容转化为升序
        while(n>i){
            let tmp=arr[i]
            arr[i]=arr[n]
            arr[n]=tmp;
            n--;
            i++;
        }

        return arr;
    }
    if(!hasChange){
        return arr.reverse()
    }
}
// console.log(nextPermutation([3,2,1]),'a')
// console.log(nextPermutation([1,3,2]),'b')

console.log(nextPermutation([2,3,1,3,3]),'c')

// console.log(nextPermutation([5,4,7,5,3,2]),'d')
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

// 有序数组中，降序序列转化为升序序列
function changeSortBy(arr){
    let sIn=0,eIn=arr.length-1;
    while(sIn<eIn){
        let tmp=arr[sIn]
        arr[sIn]=arr[eIn]
        arr[eIn]=tmp;
        sIn++;
        eIn--;
    }
    console.log(arr,296)
}
// changeSortBy([1,2,3,4])
    // console.log(nextMax,'nextMax')
    // console.log(initial,'initial')

