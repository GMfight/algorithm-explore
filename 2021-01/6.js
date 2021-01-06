
// offer 55-2
function isBalanced(root){
    if(!root) return true;
    if(!root.left&&!root.right){
        return true;
    }
    let leftLen=0,rightLen=0;
    if(root.left){
        leftLen=getMaxLen(root.left)
    }
    if(root.right){
        rightLen=getMaxLen(root.right)
    }
    if(Math.abs(leftLen-rightLen)>1) return false;
    let leftBa=true,rightBa=true;
    if(root.left){
        leftBa=isBalanced(root.left)
    }
    if(root.right){
        rightBa=isBalanced(root.right)
    }
    return leftBa&&rightBa
}

function getMaxLen(node){
    if(!node) return 0;
    let leftLen=getMaxLen(node.left);
    let rightLen=getMaxLen(node.right);
    return Math.max(leftLen,rightLen)+1;
}

let testData={
    val:1,
    left:{
        val:2
    }
}

let testData1={
    val:1,
    left:{
        val:2,
        left:{
            val:4,
            left:{
                val:7
            }
        },
        right:{
            val:5
        }
    },
    right:{
        val:3,
        right:{
            val:6,
            right:{
                val:8
            }
        }
    }
}
// console.log(isBalanced(testData1),37)

function treeToDoublyList1e(root){
    let dp=(node)=>{
        let curNode={
            val:node.val
        }
        let head,final

        if(node.left){
            let {newHead,newFinal,len}=dp(node.left);
            // console.log(newHead,newFinal,'1')
            newFinal.next=curNode;
            curNode.pre=newFinal;
            head=newHead;
            final=newFinal.next;
            // console.log('head',head,'final',final)
        }
        
        if(node.right){
            console.log('head',head,'final',final,'2')
            let {newHead,newFinal,len}=dp(node.right);
            // console.log('newHead',newHead)
            curNode.next=newHead;
            newHead.pre=curNode;
            final=newFinal;
            // console.log('head',head,'final',final,'1')
        }

        return {
            'newHead':head||curNode,
            'newFinal':final||curNode,
            'len':node.left||node.right?1:0
        }
    }
    let {newHead,newFinal}=dp(root);
    newHead.pre=newFinal;
    newFinal.next=newHead;
    return newHead;
}
// offer 36
function treeToDoublyList(root){
    let queue=[];
    let tr=function(node){
        // let curNode=queue.shift()
        if(node.left) {
            tr(node.left);
        }
        queue.push(node)
        if(node.right){
            tr(node.right)
        }
    }
    tr(root)
    let head={},curPre=head;
    while(queue){
        let curNode=queue.shift();
        curPre.right=curNode;
        curNode.left=curPre;
        curPre=curPre.right;
    }
    head.left=curPre;
    curPre.right=head;
    return head;
}

let test_data_2={
    val:4,
    left:{
        val:2,
        left:{
            val:1,
        },
        right:{
            val:3
        }
    },
    right:{
        val:5
    }
}

// console.log(JSON.stringify(treeToDoublyList(test_data_2)))
// offer 46
// 数字转字符串
// 0-a 25-z
// 12345
// dp[i]=[i,i+1,dp[i+2]]
// []
function numToStr(num){
    let nums=(num+'').split('')
    console.log('nums',nums,'len',nums.length)
    let dp=function(sIndex,eIndex){
        if(sIndex>=nums.length) return [];
        if(sIndex===nums.length-1){
            return [[nums[sIndex]]]
        }
        let res=[]
        if((nums[sIndex]+nums[sIndex+1])>25){
            let list=dp(sIndex+1,eIndex);
            list=list.map(o=>{
                o.unshift(nums[sIndex])
                return o;
            })
            res=[...list]
        }else{
            let list1=dp(sIndex+1,eIndex);
            list1=list1.map(o=>{
                o.unshift(nums[sIndex])
                return o;
            })
            let list2=dp(sIndex+2,eIndex)
            if(list2&&list2.length>0){
                list2=list2.map(o=>{
                    o.unshift(`${nums[sIndex]+nums[sIndex+1]}`)
                    return o;
                })
            }
            res=[...list1,...list2]
        }
        return res;
    }
    let list=dp(0,nums.length-1)
    return (list&&list.length)||0;
}
console.log(numToStr(12258))
// 树结构转数组参考：
// 1）32-1，36，

// 最长/最大
// 1）最长连续子串（不重复）
// 2）