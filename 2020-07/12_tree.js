// 二叉树
//1.（94） 先序转中序（中序遍历）
// 值为null，子结点结束
function inorderTraversal(root) {
  let result = [];
  if (!root || root.value) return [];
  if (root.left) {
    let cur_arr = inorderTraversal(root.left);
    result.push(...cur_arr);
  }
  result.push(root.val);
  if (root.right) {
    let cur_arr = inorderTraversal(root.right);
    result.push(...cur_arr);
  }
  return result;
}
let testData = {
  value: 1,
  left: {
    value: 0,
  },
  right: {
    value: 2,
    left: {
      value: 3,
    },
    right: {
      value: 4,
      left: {
        value: 5,
      },
    },
  },
};
//   console.log(inorderTraversal(testData));

// 先序遍历构造为树结构(失败)
function arrToTree(arr) {
  if (arr.length === 1) {
    return { value: arr[0] };
  }
  if (arr.length === 2) {
    let obj = {
      value: arr[0],
    };
    obj = Object.assign(obj, {
      left: {
        value: arr[1],
      },
    });
    return obj;
  }
  let obj_arr = [];
  let cur_obj = { value: arr[0] };
  obj_arr.push(cur_obj);
  let arr_i = 0,
    obj_i = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i]) {
      if (!obj.left) {
        obj.left = { value: arr[i] };
      } else if (!obj.right) {
        obj.right = { value: [arr[i]] };
        obj_arr.shift(obj.right);
        obj_arr.shift(obj.left);
      }
    }
  }
}

// 2.（97）升序数组，构造为二叉搜索树(思路失败)
function generateTrees3(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    let cur_root = {
      val: i,
    };
    for (let j = 1; j <= n; j++) {
      if (j === i) continue;
      if (j < i) {
        if (!cur_root.left) {
          cur_root.left = {
            val: j,
          };
          continue;
        }
        leftNodes = insertNode(j, cur_root.left);
      } else {
        if (!cur_root.right) {
          cur_root.right = {
            val: j,
          };
          continue;
        }
        rightNodes = insertNode(j, i.right);
      }
    }
    result.push(cur_root);
  }
  return result;
}
function insertNode(val, node) {
  let result = {};
  if (val > node.val) {
    result.push({
      val: val,
      left: node,
    });
    if (!node.right) {
      node.right = {
        val: val,
      };
      result.push(node);
    } else {
      insertNode(val, node.right);
    }
  } else {
    if (!node.left) {
      node.left = {
        val: val,
      };
      return node;
    }
    insertNode(val, node.left);
  }
}
// console.table(generateTrees(3)); 8.00
// 思路成功
function generateTrees2(n) {
  let trees = createTree(1, n);
  return trees;
}
function createTree(start, end) {
  if (start === end) {
    return [
      {
        val: start,
      },
    ];
  }
  if (start > end) {
    return [null];
  }
  if (start === 0) {
    return [{ val: end }];
  }
  if (end === 0) {
    return [{ val: start }];
  }
  let results = [];
  for (let i = start; i <= end; i++) {
    // console.log(i, "i");
    let left_trees = createTree(start, i - 1);
    let right_trees = {};
    right_trees = createTree(i + 1, end);
    for (let left of left_trees) {
      for (let right of right_trees) {
        let obj = {
          val: i,
          left: left,
          right: right,
        };
        // console.log(obj, 162);
        results.push(obj);
      }
    }
  }
  return results;
}
// 标准答案
// console.info(JSON.stringify(generateTrees2(3)), 176);
var generateTrees = function (n) {
  if (n === 0) return [];
  let getBSTnum = (left, right) => {
    if (left > right) return [null];
    //这里子树为的null很重要，二叉树最重要一点就是右子树的值一定比左子树的值大，所以 if(left>right) return [null];
    if (left === right) return [{ val: left }];
    //当左右子树值相等时，说明这个值就是父节点 这里return [new TreeNode(left 或者 right)] 都是可以的
    let res = [];
    for (let i = left; i <= right; i++) {
      //当父节点从1到n的情况
      let leftBst = getBSTnum(left, i - 1); //这里左子树的值肯定比父节点小，所以范围是 [1,i-1]
      let rightBst = getBSTnum(i + 1, right); //这里右子树的值肯定比父节点大，所以范围是 [i+1,n]   这里主要就是构建递归二叉树
      for (let leftKey of leftBst) {
        for (let rightKey of rightBst) {
          //这里注意喔，用的for...of，即使是[null]，也可以遍历
          let root = { val: i };
          root.left = leftKey;
          root.right = rightKey;
          res.push(root);
        }
      }
    }
    return res;
  };
  return getBSTnum(1, n);
};
// console.log(generateTrees(3));

// 3.给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
// 补充，用数学思维解决，递归过于消耗空间
function numTrees(n) {
  if (n <= 2) return n;
  let getNum = (start, end) => {
    // console.log(start, "start", end, "end");
    if (start >= end) return 1;
    let result = 0;
    for (let i = start; i <= end; i++) {
      let leftNum = getNum(start, i - 1);
      let rightNum = getNum(i + 1, end);
      result += leftNum * rightNum;
    }
    return result;
  };
  return getNum(1, n);
}
// console.log(numTrees(19));

// g(i) = g(i - 1) + i + g(n - i) - (n - i);
// 4.(98)给定一个二叉树，判断其是否是一个有效的二叉搜索树（方法失败）。
// 用区间策略改进
function checkBST(root, val, dir) {
  if (!root || root.val === null || root.val === "undefined") return true;

  // console.log("root", val, 226);
  if (!root.left && !root.right) return true;
  let result = true;
  if (root.left) {
    if (dir == "l" && root.left.val > val) return false;
    if (dir === "r" && root.left.val < val) return false;
    // console.log(root.val, 225);
    // console.log(root.left.val, 226);
    // console.log(root.val > root.left.val ? true : false, 226);
    // console.log(checkBST(root.left, root.val), 227);
    result = root.val > root.left.val && checkBST(root.left, root.val, "l");
    // console.log(result, 228);
  }
  if (!result) return false;
  if (root.right) {
    if (dir == "l" && root.right.val > val) return false;
    if (dir === "r" && root.right.val < val) return false;
    result = root.val < root.right.val && checkBST(root.right, root.val, "r");
  }
  return result;
}
function isValidBST(root) {
  if (!root || root.val === null || root.val === "undefined") return true;
  return checkBST2(root, null, null);
}

// 思路二：用区间策略修改
function checkBST2(root, upper, lower) {
  let result = true;
  if (root.left) {
    if (upper !== null && upper !== "undefined") {
      if (root.left.val >= upper) return false;
    }
    if (lower !== null && lower !== "undefined") {
      if (root.left.val <= lower) return false;
    }
    result = root.left.val < root.val && checkBST2(root.left, root.val, lower);
    // checkBST2(root.left,)
  }
  if (!result) return false;
  if (root.right) {
    if (upper !== null && upper !== "undefined") {
      if (root.right.val >= upper) return false;
    }
    if (lower !== null && lower !== "undefined") {
      if (root.right.val <= lower) return false;
    }
    result =
      root.right.val > root.val && checkBST2(root.right, upper, root.val);
  }
  return result;
}

// 思路三：借助中序遍历，升序属性

let testData4 = {
  val: 2147483647,
  left: {
    val: -2147483648,
    // left: {
    //   val: -90001,
    // },
    // right: {
    //   val: -89996,
    //   right: {
    //     val: -80000,
    //   },
    // },
  },
  // right: {
  //   val: -534,
  // left: {
  //   val: -4324,
  // },
  // right: {
  //   val: -61,
  // },
  // },
};

let testData5 = {
  val: 3,
  left: {
    val: 1,
    left: {
      val: 0,
    },
    right: {
      val: 3,
    },
  },
};
// console.log(isValidBST(testData5));

// 5.（100）给定两个二叉树，编写一个函数来检验它们是否相同。
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的

// 思路2：按照层级遍历树(错误思路)
// 思路3（深度优先遍历）（成功）
// 思路4(递归)未尝试
function isSameTree(a, b) {
  let aStatus = true,
    bStatus = true;
  if (!a || a.val === null || a.val === "undefined") {
    aStatus = false;
  }
  if (!b || b.val === null || b.val === "undefined") {
    bStatus = false;
  }
  if (!aStatus && !bStatus) return true;
  if (!aStatus) return false;
  if (!bStatus) return false;

  let traverseTree = (root) => {
    let result = [];
    // nodearr.push(root);
    result.push(root.val);
    if (root.left) {
      let arr = traverseTree(root.left);
      result.push(...arr);
    } else {
      result.push("s");
    }
    if (root.right) {
      let arr = traverseTree(root.right);
      result.push(...arr);
    } else {
      result.push("s");
    }

    return result;
  };
  let a_str = traverseTree(a).join("");
  let b_str = traverseTree(b).join("");
  return a_str === b_str;
}

let e = {
  val: 5,
  left: {
    val: 4,
    right: {
      val: 1,
      left: {
        val: 2,
      },
    },
  },
  right: {
    val: 1,
    right: {
      val: 4,
      left: {
        val: 2,
      },
    },
  },
};

let aObj = {
  val: 1,
  right: {
    val: 2,
  },
};
let bObj = {
  val: 1,
  left: {
    val: 2,
  },
};

// 二叉树，深度遍历和先序遍历是否重叠
// 6.给定一个二叉树，检查它是否是镜像对称。
// 含义：每层的结点是偶数，且遍历到的字符串，对称(思路不可行)
// 修改：一层级内判断是否对称
// 对称树特点：从左遍历和从右遍历，得到的值一样
// 思路一
function isSymmetric(root) {
  if (!root || root.val === null || root.val === "undefined") return true;
  let arr = [],
    result = [];
  arr.push(root, root);
  while (arr && arr.length > 0) {
    let left = arr.shift();
    let right = arr.shift();
    if (!left && !right) {
      continue;
    }
    if (!left || !right) return false;
    if (left.val !== right.val) {
      return false;
    }
    arr.push(left.left);
    arr.push(right.right);
    arr.push(left.right);
    arr.push(right.left);
  }
  return true;
}
// 6.2用迭代思路
function isSymmetric2(root) {
  let leftT = function (root) {
    if (!root) return "s";
    return root.val + leftT(root.left) + leftT(root.right);
  };
  let left_result = leftT(root);
  let rightT = function (root) {
    if (!root) return "s";
    return root.val + rightT(root.right) + rightT(root.left);
  };
  let right_result = rightT(root);
  console.log(left_result, "left");
  console.log(right_result, "right");
}

let testData6 = {
  val: 1,
  left: {
    val: 2,
    // left: {
    //   val: 2,
    // },
    right: {
      val: 3,
    },
  },
  right: {
    val: 2,
    // left: {
    //   val: 4,
    // },
    right: {
      val: 3,
    },
  },
};

let testData_right = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 3,
    },
  },
  right: {
    val: 2,
    right: {
      val: 3,
    },
  },
};

console.log(isSymmetric2(testData_right));
