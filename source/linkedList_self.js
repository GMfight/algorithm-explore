// 1.特点
// 1）数据结构
// let Node = {
//   data: '',
//   next: 'obj'
// }
// 最后一个node的next==null
// 头结点中不存储数据

function singleNode(val) {
  return {
    val,
    next: null,
  };
}
function singleLinkList() {
  this.head = {
    next: null,
    val: null,
  };
}
singleLinkList.prototype.insert = function(val) {
  let curNode = this.head;
  while (curNode.next) {
    curNode = curNode.next;
  }
  curNode.next = new singleNode(val);
};
singleLinkList.prototype.remove = function(val) {
  let curNode = this.head;
  while (curNode.next) {
    let preNode = curNode;
    curNode = curNode.next;
    // 引用类型比较，需要再改进
    if (curNode.val === val) {
      preNode.next = curNode.next;
      return;
    }
  }
};
singleLinkList.prototype.print = function() {
  let curNode = this.head;
  while (curNode.next) {
    curNode = curNode.next;
    console.log(curNode.val);
  }
};
singleLinkList.prototype.init = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    this.insert(arr[i]);
  }
};

let list1 = new singleLinkList();
// list1.init([1, 2, 3, 4])
// addLink();
// // list1.print()
// list1.remove(4);
// console.log("remove-----------");
// list1.print()

function DoubleNode(val) {
  return {
    val,
    pre: null,
    next: null,
  };
}

function DoubleList() {
  this.head = {
    val: null,
    pre: null,
    next: null,
  };
}
DoubleList.prototype.init = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    this.insert(arr[i]);
  }
};
DoubleList.prototype.insert = function(val) {
  let curNode = this.head;
  while (curNode.next) {
    curNode = curNode.next;
  }
  let newNode = new DoubleNode(val);
  newNode.pre = curNode;
  curNode.next = newNode;
};
// 链表插入，指定插入位置
DoubleList.prototype.insertIndex = function(val, index) {};
DoubleList.prototype.print = function() {
  let curNode = this.head;
  while (curNode.next) {
    curNode = curNode.next;
    console.log(curNode.val);
  }
};
DoubleList.prototype.remove = function(val) {
  let curNode = this.head;
  while (curNode.next) {
    let preNode = curNode;
    curNode = curNode.next;
    // 引用类型比较，需要再改进
    if (curNode.val === val) {
      preNode.next = curNode.next;
      if (curNode.next) {
        curNode.next.pre = preNode;
      }
      return;
    }
  }
};
DoubleList.prototype.toArray = function() {
  let arr = [];
  let curNode = this.head;
  while (curNode.next && curNode.next.val !== null) {
    curNode = curNode.next;
    arr.push(curNode.val);
  }
  return arr;
};
DoubleList.prototype.reverse = function() {
  let newList = new this.constructor();
  newList.init(this.toArray().reverse());
  // console.log(newList, 121);
  return newList;
};

let list2 = new DoubleList();
list2.init([1, 2, 3, 4]);
// // list2.print();
// console.log("double remove----");
// list2.remove(4);
// // list2.print();

function CycleDoubleList() {
  DoubleList.apply(this);
  this.head.next = this.head;
}
CycleDoubleList.prototype = DoubleList.prototype;
CycleDoubleList.prototype.constructor = CycleDoubleList;
CycleDoubleList.prototype.insert = function(val) {
  let curNode = this.head;
  while (curNode.next && curNode.next.val !== null) {
    curNode = curNode.next;
  }
  let newNode = new DoubleNode(val);
  newNode.pre = curNode;
  curNode.next = newNode;
  newNode.next = this.head;
  this.head.pre = newNode;
};

CycleDoubleList.prototype.print = function() {
  let curNode = this.head;
  // console.log(curNode, 139)
  while (curNode.next && curNode.next.val !== null) {
    curNode = curNode.next;
    console.log(curNode.val);
  }
};

CycleDoubleList.prototype.remove = function(val) {
  let curNode = this.head;
  while (curNode.next && curNode.next.val !== null) {
    let preNode = curNode;
    curNode = curNode.next;
    // 引用类型比较，需要再改进
    if (curNode.val === val) {
      preNode.next = curNode.next;
      if (curNode.next) {
        curNode.next.pre = preNode;
      }
      return;
    }
  }
};

let list3 = new CycleDoubleList();
list3.init([1, 2, 3, 4, 5]);
// console.log('CycleDoubleList remove---------')

// list3.remove(4)
// list3.print()

function OrderLinkedList() {
  CycleDoubleList.apply(this);
}
OrderLinkedList.prototype = CycleDoubleList.prototype;
OrderLinkedList.prototype.constructor = OrderLinkedList;
OrderLinkedList.prototype.insert = function(val) {
  let curNode = this.head;
  let newNode = new singleNode(val);
  while (curNode.next && curNode.next.val !== null) {
    let preNode = curNode;
    curNode = curNode.next;
    if (val < curNode.val) {
      newNode.next = curNode;
      curNode.pre = newNode;
      newNode.pre = preNode;
      preNode.next = newNode;
      return;
    }
  }

  newNode.pre = curNode;
  newNode.next = curNode.next;
  newNode.next.pre = curNode;
  curNode.next = newNode;
};
let orderList1 = new OrderLinkedList();
orderList1.init([0, 1, 2, 9, 22]);
let orderList2 = new OrderLinkedList();
orderList2.init([3, 4, 5, 1]);
// 有序链表合并
function mergeOrderLink(l1, l2) {
  let newLink = new OrderLinkedList();
  let l1_node = l1.head;
  while (l1_node.next && l1_node.next.val !== null) {
    l1_node = l1_node.next;
    newLink.insert(l1_node.val);
  }

  let l2_node = l2.head;
  while (l2_node.next && l2_node.next.val !== null) {
    l2_node = l2_node.next;
    newLink.insert(l2_node.val);
  }
  return newLink;
}
let newLinkedList = mergeOrderLink(orderList1, orderList2);
let reverseOrderList1 = orderList1.reverse();
// reverseOrderList1.print();

// 每隔k个结点，反转链表
function reverseInterval(list, k) {
  let curNode = list.head,
    i = 0,
    arr = [],
    preNode;
  while (curNode.next && curNode.next.val !== null) {
    if (i % k === 0) preNode = curNode;
    i++;
    // console.log(i, 240);
    curNode = curNode.next;
    arr.push(curNode.val);

    if (i === k) {
      arr.reverse();
      let firstNode = (lastNode = {
        val: arr[0],
        next: null,
      });
      for (let j = 1; j < arr.length; j++) {
        lastNode.next = {
          val: arr[j],
          next: null,
        };
        lastNode = lastNode.next;
      }

      preNode.next = firstNode;
      lastNode.next = curNode.next;
      curNode = lastNode;
      // console.log(JSON.stringify(preNode), 260);
      // preNode = null;
      i = 0;
      arr = [];
    }
  }
  return list;
}

let orderList3 = new singleLinkList();
orderList3.init([1, 2, 3, 4, 5]);
let orderList3_result = reverseInterval(orderList3, 2);
// console.log(
orderList3_result.print();
// );
// console.log(reverseInterval(orderList3), 262);
