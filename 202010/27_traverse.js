// 给定括号对数，返回所有有可能的组合
// 回溯+剪枝
function generateParenthesis (n){
    let result=[]
    let dp=function(l,r,str){
        if(l===n&&r===n){
            result.push(str);
            return;
        }
        if(r>l){
            return null;
        }
        
        if(l<n){
            dp(l+1,r,str+'(')
        }

        if(r<n){
            dp(l,r+1,str+')')
        }
    }
    dp(0,0,'')
    console.log(result)
}
// generateParenthesis(3)

// function merge(arr){
//     let result=[];
//     for(let i=0;i<arr.length-1;i++){
//         let newArr=[]
//         // for(let j=i+1;j<arr.length;j++){
//         //     if(arr[i][1]<arr[j][0]) continue;
//         //     newArr.push([Math.min(arr[i][0],arr[i][1]),Math.max(arr[i][1],arr[j][1])])
//         // }
//         // console.log(newArr,34)
//         // if(!newArr||newArr.length===0) {
//         //     result.push(arr[i])
//         // }else{
//         //     result.push(...newArr)
//         // }
//     }
//     return result;
// }
// 区间合并，指针
function merge2(arr){
    let index=0;
    arr.sort((a,b)=>{
        return a[0]-b[0]
    })
    // console.log(arr,49)
    while(index<arr.length-1){
        if(arr[index][1]<arr[index+1][0]){
            index++
            continue;
        }
        arr[index][0]=Math.min(arr[index][0],arr[index+1][0])
        arr[index][1]=Math.max(arr[index][1],arr[index+1][1])
        arr.splice(index+1,1)
    }
    return arr;
}
let res=merge2([[1,3],[2,6],[8,10],[15,18]])
// console.log(res,'a')
// 二维数组中返回target的索引（指针）
function findIndexS(arr,target){
    if(arr.length===0) return [-1,-1]
    if(arr.length===1){
        let curArr=arr[0]
        if(curArr.length===0) return [-1,-1]
        if(curArr[0]>target||curArr[curArr.length-1]<target){
            return [-1,-1]
        }
        if(curArr.length===1&&curArr[0]===target){
            return [0,0]
        }
        let sIndex=Math.floor(curArr.length/2);

            // console.log(curArr.slice(0,sIndex),77)
        if(curArr[sIndex]>target){
            let sRes=findIndexS([[...curArr.slice(0,sIndex)]],target);
            if(sRes[1]>=0) return sRes;
        }else{
            let sRes=findIndexS([[...curArr.slice(sIndex,curArr.length)]],target)
            if(sRes[1]>=0) return [0,sIndex+sRes[1]]
        }
        return [-1,-1]
    }
    let fIndex=Math.floor(arr.length/2);
    if(arr[fIndex][0]>target){
        let res=findIndexS(arr.slice(0,fIndex),target)
        if(res[0]>=0) return res;
    }else{
        let res=findIndexS(arr.slice(fIndex,arr.length),target)
        if(res[0]>=0) return [res[0]+fIndex,res[1]];
    }
    return [-1,-1];
}

// 用例
// [[1,2],[3,4]]; 2->[0,1]
// [[1,2],[3,4]]; 1->[0,0]
// [[1],[3,4]]; 2->[-1,-1]


//  console.log(findIndexS([[1,2],[3,4]],2),'a')
//  console.log(findIndexS([[1,2],[3,4]],1),'b')
//  console.log(findIndexS([[1],[3,4]],2),'c')
//  console.log(findIndexS([[],[]],0),'c')
// 二叉树和为某一值的所有路径
function treePathTarget(root,target){
    if(root.val===target){
        return [[root.val]]
    }
    let result=[]
    if(root.left){
        res=treePathTarget(root.left,target-root.val);
        if(res&&res.length>0){
            res.forEach(o=>{
                o.unshift(root.val)
            })
            result=[...result,...res]
        }
    }
    if(root.right){
        res=treePathTarget(root.right,target-root.val);
        if(res&&res.length>0){
            res.forEach(o=>{
                o.unshift(root.val)
            })
            result=[...result,...res]
        }
    }
    return result;
}
    //     2
    //   1    4
    // 4  3  1
    let tree_a={
        val:2,
        left:{
            val:1,
            left:{
                val:4
            },
            right:{
                val:3
            }
        },
        right:{
            val:4,
            left:{
                val:1
            }
        }
    }
// console.log(treePathTarget(tree_a,2))


// 二叉搜索树转双向有序链表

function orderTreeToLink(myRoot){
    function dp(root){
        let curNode={
            val:root.val,
            next:null
        }
        if(!root.left&&!root.right){
            return curNode;
        }
        let leftNode=null;

        if(root.left){
            leftNode=dp(root.left)
            // console.log(leftNode,173)
            let curLeft=leftNode;
            while(curLeft.next){
                curLeft=curLeft.next;
            }
            curLeft.next=curNode;
            // curNode.pre=curLeft
            // console.log(curLeft,180)
            // console.log(leftNode,181)
        }

        if(root.right){
            let rightNode=dp(root.right);
            curNode.next=rightNode;
            // rightNode.pre=curNode;
        }
        // console.log(curNode,186)
        // console.log(leftNode,187)
        return root.left?leftNode:curNode;
    }
    return dp(myRoot)
}
//     6
//   4    9
// 3  5  7
// let res1=orderTreeToLink({val:6,left:{val:4,left:{val:3},right:{val:5}},right:{val:9,left:{val:7}}});
// console.log(JSON.stringify(res1),190)
// let res2=orderTreeToLink({val:6,left:{val:5,left:{val:4}}});
// console.log(JSON.stringify(res2),202)

// 字符串（字符可重复）所有排列组合
function charArray(chars){
    if(chars.length===0) return []
    if(chars.length===1) return [chars[0]]
    let result=[]
    for(let i=0;i<chars.length;i++){
        if(i!==0&&chars[i]===chars[i-1]) continue;
        let curChar=chars.slice(0,i).concat(chars.slice(i+1,chars.length));
        let res=charArray(curChar);
        res=res.map(o=>{
            return [chars[i],...o]
        })
        result.push(...res)
    }
    return result;
}
// console.log(charArray(['a','b','c','d']),227)
// 最小的k个数
function minPart(arr,n){
    if(n===1){
        return [Math.min(...arr)];
    }
    if(n===arr.length) return arr;
    let mid=arr[0];
    let leftArr=[],rightArr=[]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<mid){
            leftArr.push(arr[i])
        }else[
            rightArr.push(arr[i])
        ]
    }
    if(leftArr.length===n) return leftArr;
    if(leftArr.length===n-1) return [...leftArr,mid]
    let result=[];
    if(leftArr.length>n){
        result=minPart(leftArr,n)
    }else{
        result=minPart(rightArr,n-1-leftArr.length);
        result=[mid,...leftArr,...result]
    }
    return result;

}
// console.log(minPart([1,3],2),'a')
// console.log(minPart([1,5,2,4,7],4),'a')
//[1,3] 1
// [1,5,2,4,7] 2 [1,2]


// 快速排序原理失败;可尝试哈希，重构保存每个值的出现次数
function indexMoreMid(arr){
    if(arr.length<=2) return arr[0]
    let leftArr=[],rightArr=[],mid=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<=mid){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }
    let midIndex=leftArr.length;
    if(midIndex===Math.floor((arr.length-1)/2)){
        return mid;
    }
    if(midIndex<Math.floor(arr.length/2)){
        let res=indexMoreMid(rightArr)
        return res;

    }else{
        let res= indexMoreMid(leftArr)
        return res;
    }
    return -1;
    // console.log(res,274)
}
function indexmoreMid2(arr){
    let count=0;

}
// [2,1,1] 
// [1,1,2]
// [1,2,3,3];
console.log(indexMoreMid([1,1,2,2,2,3,3,3] ),'a')

// 下一个排列，指针
// 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

// 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

// 必须原地修改，只允许使用额外常数空间。

// 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,
function nextPermutation(nums){

}


// (48)矩阵90度旋转
// [m][n]   [n][n-m]
function rotate(arr){
    let h=arr.length-1,w=arr[0].length-1;
    for(let i=0;i<=h;i++){
        for(let j=i;j<=w;j++){
            let tmp=arr[j][j-i];
            arr[j][j-i]=arr[i][j];
            arr[i][j]=tmp;
        }
        return arr;
    }
    return arr;
}
// console.log(rotate([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
//   ]),322)

//   正确解法研究：
  var rotate = function(matrix, l = matrix.length - 1) {// 换行可合并到1行
    for (var j = matrix.length >> 1; j--;)
        for (var i = matrix.length - j - 1, t; i-- > j;)
            t = matrix[i][j], 
            matrix[i][j] = matrix[l - j][i],
            matrix[l - j][i] = matrix[l - i][l - j],
            matrix[l - i][l - j] = matrix[j][l - i],
            matrix[j][l - i] = t 
};


