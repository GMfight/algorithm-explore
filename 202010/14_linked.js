// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。


// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807


// 2.(19) 删除链表的倒数第N个节点
// 倒数问题可以用递归思路解决

// 3.合并两个有序链表

// 4.反转打印
function printReverse(head){
    let arr=[]
    let curNode=head;
    while(curNode.next){
        curNode=curNode.next;
        arr.push(curNode.val)
    }
    while(arr.length>0){
        console.log(arr.pop())
    }
}
// 用例
// 1->2->3>
// 1
// []
// printReverse({next:{val:1,next:{val:2,next:{val:3}}}})
// printReverse({next:{val:1}})
// printReverse({})