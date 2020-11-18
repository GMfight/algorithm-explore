/* 二叉树展开为链表
1.按照有序二叉树展开为有序链表
 */
function flatten(root){
    let curNode,head,nextNodes;
    if(root){
        curNode={
            val:root.val,
            next:null
        }
    }
    if(root.left){
        head=flatten(root.left);
        if(head){

            let preFinalNode=head;
            while(preFinalNode.next){
                preFinalNode=preFinalNode.next
            }
            preFinalNode.next=curNode;
        }
    }
    if(root.right){
        let rightNodes=flatten(root.right);
        curNode.next=rightNodes;
    }
    return head||curNode;
}

/* 2.按照先序遍历展开
 */function flatten2(root){
    let head;
    if(root){
        head={
            val:root.val,
            next:null
        }
    }
    let leftFinal=head;
    if(root.left){
        let leftNodes=flatten(root.left);
        if(leftNodes){
            let preFinalNode=leftNodes;
            while(preFinalNode.next){
                preFinalNode=preFinalNode.next
            }
            head.next=leftNodes;
            leftFinal=preFinalNode
        }
    }
    if(root.right){
        let rightNodes=flatten(root.right);
        leftFinal.next=rightNodes;
    }
    return head;
}

/* 3.原地按照先序遍历展开 */
function flatten3(root){
    let preFinalNode;
    if(root){
        root.next=null
    }
    let leftN=root.left;
    let rightN=root.right;
    if(leftN){
        let leftNodes=flatten(leftN);
        root.right=leftNodes;

        preFinalNode=leftNodes;
        while(preFinalNode.right){
            preFinalNode=preFinalNode.right
        }
    }
    preFinalNode=preFinalNode||root;
    if(rightN){
        let rightNodes=flatten(rightN);
        preFinalNode.right=rightNodes;
    }
    return root
}

// 深度遍历非递归形式
function deepTraverse(root){
    let queue=[root],res=[];
    let maxDepth=0,curDepth=0;
    while(queue&&queue.length>0){
        let levalSize=queue.length;
        let newArr=[]
        maxDepth++;
        for(let i=0;i<levalSize;i++){
            let curNode=queue.shift();
            if(curNode.right){
                newArr.unshift(curNode.right);
            }
            if(curNode.left){
                newArr.unshift(curNode.left)
            }
        }
        if(newArr&&newArr.length>0){
            queue.push(...newArr)
        }
    }
    return maxDepth;
}
let testRoot={
    val:1,
    left:{
        val:2,
        // left:{
        //     val:4,
        // },
        right:{
            val:6,
            right:{
                val:7
            }
        }
    },
    right:{
        val:3,
        right:{
            val:5
        }
    }
}
// console.log(deepTraverse(testRoot),'112')
//         1
//     2       3
//       6          5
            // 7
// 结构化转数组
function structureToTree(arr){
    let root={id:0,name:'root'},queue=[root];
    queue.push(root);
    while(arr&&arr.length>0){
        let node=arr.shift()
        let parentIndex=queue.findIndex(o=>o.id===node.parentId);
        if(queue[parentIndex].childs){
            queue[parentIndex].childs.push(node);
            
        }else{
            queue[parentIndex].childs=[node]
        }
        queue.unshift(node);

    }
    return root;
}
// 重点：map结构，key值是否存在的判断；
// if(key in map)
function structureToTree2(arr){
    let res=[];
    let map=arr.reduce((res,v)=>(res[v.id]=v,res),{})
    console.log(res,153);
    console.log(map,154);
    if(0 in map){
        console.log(156,'true')
    }else{
        console.log(158,'false')
    }
}
let test_list=[
    { id: 1, name: '部门A', parentId: 0 },
    { id: 2, name: '部门B', parentId: 0 },
    { id: 3, name: '部门C', parentId: 1 },
    { id: 4, name: '部门D', parentId: 1 },
    { id: 5, name: '部门E', parentId: 2 },
    { id: 6, name: '部门F', parentId: 3 },
    { id: 7, name: '部门G', parentId: 2 },
    { id: 8, name: '部门H', parentId: 4 }
];
// let res=structureToTree2(test_list)
// console.log(JSON.stringify(res),158)
