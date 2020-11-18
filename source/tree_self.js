function preOrder(obj){
    let arr=[obj.val]
    if(obj.left) {
        
        let left_arr=preOrder(obj.left)
        arr.push(...left_arr)
    }
    if(obj.right) {
        let right_arr=preOrder(obj.right)
        arr.push(...right_arr)

    }
    return arr;
}
    //         1
    //      2      3
    // 4     5   6  
// 8        9
//              10 
//           11

let tree1={
    val:1,
    left:{
        val:2,
        left:{
            val:4,
            left:{
                val:8
            }
        },
        right:{
            val:5,
            left:{
                val:9,
                right:{
                    val:10,
                    left:{
                        val:11
                    }
                }
            }
        }

    },
    right:{
        val:3,
        left:{
            val:6
        }
    }
}
console.log(preOrder(tree1),'preorder')
function midOrder(obj){
    let arr=[]
    if(obj.left) {
        
        let left_arr=midOrder(obj.left)
        arr.push(...left_arr)
    }
    arr.push(obj.val)
    if(obj.right) {
        let right_arr=midOrder(obj.right)
        arr.push(...right_arr)

    }
    return arr;
}
console.log(midOrder(tree1),'midorder')
function postOrder(obj){
    let arr=[]
    if(obj.left) {
        
        let left_arr=postOrder(obj.left)
        arr.push(...left_arr)
    }
    if(obj.right) {
        let right_arr=postOrder(obj.right)
        arr.push(...right_arr)
        
    }
    arr.push(obj.val)
    return arr;
}
console.log(postOrder(tree1),'postOrder')
// 广度优先：从上到下
function widthOrder(obj){
    let arr=[]
    let nodes=[obj]
    while(nodes&&nodes.length>0){
        let curNode=nodes.shift();
        arr.push(curNode.val)
        if(curNode.left) nodes.push(curNode.left);
        if(curNode.right) nodes.push(curNode.right);
    }
    return arr;
}
console.log(widthOrder(tree1),'widthOrder')
// 广度优先，自下而上,从左到右
function widthOrderTraverseVer(obj){
    let arr=[]
    let nodes=[obj]
    while(nodes&&nodes.length>0){
        let curNode=nodes.shift();
        arr.push(curNode.val)
        if(curNode.right) nodes.push(curNode.right);
        if(curNode.left) nodes.push(curNode.left);
    }
    return arr.reverse();
}
console.log(widthOrderTraverseVer(tree1),'widthOrderTraverseVer')
// 锯齿状遍历
function widthOrderJagged(obj){
   let nodes=[obj],curLevel=0,arr=[];
   while(nodes&&nodes.length>0){
       let curArr=[],curNodes=[]
    for(let i=0;i<nodes.length;i++){
        let curNode=nodes[i]
        if(curLevel%2===0){
            curArr.unshift(curNode.val)
        }else{
            curArr.push(curNode.val)
        }
        if(curNode.left) curNodes.push(curNode.left);
        if(curNode.right) curNodes.push(curNode.right);
    }
    nodes=curNodes
    arr.push(...curArr)
    curLevel++;
   }
   return arr;
}

console.log(widthOrderJagged(tree1),'widthOrderJagged')

// 求树最大深度
function getDepth(obj){
    if(!obj.left&&!obj.right){
        return 1;
    }
    let leftDepth=obj.left?getDepth(obj.left):0
    let rightDepth=obj.right?getDepth(obj.right):0
    // console.log(leftDepth,'left')
    // console.log(rightDepth,'right')

    return Math.max(leftDepth,rightDepth)+1
}
console.log(getDepth(tree1),'getDepth')

// 是否相同的树（结构，值相同）
function isSameTrees(ta,tb){
    if(ta.val!==tb.val) return false;
    if(!ta.left&&!ta.right&&!tb.left&&!tb.right) return true;
    let left_res=ta.left&&tb.left&&compareTrees(ta.left,tb.left)||(!ta.left&&!tb.left);
    let right_res=ta.right&&tb.right&&compareTrees(ta.right,tb.right)||(!ta.right&&!tb.right);

    return left_res&&right_res
}

let a={
    val:1,
    left:{
        val:2
    }
}

let b={
    val:1,
    left:{
        val:2
    },
    right:{
        val:3
    }
}
console.log(isSameTrees(a,b),'compareTrees')
// 是否对称二叉树
// 特点：left.val=right.val
function isSymmentryTree(){


}




