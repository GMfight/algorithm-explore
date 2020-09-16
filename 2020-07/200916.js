// 1.(102)二叉树的层序遍历
// 输出：[[3],[9,20],[15,7]]
function levelOrder(root) {
  if (!root || root.val === null || root.val === "undefined") return [];
  let arr = [
      {
        node: root,
        level: 1,
      },
    ],
    cur_level = 1;
  result = [];
  while (arr && arr.length > 0) {
    let obj = arr.shift();
    cur_level = obj.level;
    if (!obj || !obj.node) continue;
    result[cur_level - 1] = result[cur_level - 1] || [];
    result[cur_level - 1].push(obj.node.val);
    if (obj.node.left) arr.push({ node: obj.node.left, level: cur_level + 1 });
    if (obj.node.right)
      arr.push({ node: obj.node.right, level: cur_level + 1 });
  }
  return result;
}
let testData1 = {
  val: 3,
  left: {
    val: 9,
  },
  right: {
    val: 20,
    left: {
      val: 15,
    },
    right: {
      val: 7,
    },
  },
};
// console.log(levelOrder(testData1));

// 2.(103)给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
function zigzagLevelOrder(root) {
  let result = levelOrder(root);
  if (!result || resule.length <= 0) return [];
  return result.map((o, oIndex) => {
    return oIndex % 2 === 0 ? o : o.reverse();
  });
}

// 3.（104）二叉树最大深度：给定一个二叉树，找出其最大深度。
function maxDepth(root) {
  if (!root || root.val === null || root.val === "undefined") return 0;
  let leftDepth = 0,
    rightDepth = 0;
  if (!root.left && !root.right) return 1;
  if (root.left) leftDepth = maxDepth(root.left);
  if (root.right) rightDepth = maxDepth(root.right);
  return 1 + Math.max(leftDepth, rightDepth);
}

// 4.（105）根据一棵树的前序遍历与中序遍历构造二叉树。
function buildTree(preorder, inorder) {
  if (!preorder || preorder.length === 0) return null;
  if (preorder.length === 1) return { val: preorder[0] };
  let root = {
    val: preorder[0],
  };
  preorder.shift();
  let leftPre = [],
    leftIn = [],
    rightPre = [],
    rightIn = [];
  let inIndex = inorder.findIndex((o) => o === root.val);
  if (inIndex === 0) {
    inorder.shift();
    rightIn = inorder;
  } else if (inIndex === inorder.length - 1) {
    inorder.pop();
    leftIn = inorder;
  } else {
    leftIn = inorder.splice(0, inIndex);
    inorder.shift();
    rightIn = inorder;
  }
  if (leftIn) {
    leftPre = preorder.filter((pre) => {
      return leftIn.findIndex((o) => o === pre) >= 0;
    });
  }
  if (rightIn) {
    rightPre = preorder.filter((pre) => {
      return rightIn.findIndex((o) => o === pre) >= 0;
    });
  }
  //   let leftTree, rightTree;
  if (leftIn && leftIn.length > 0) {
    root.left = buildTree(leftPre, leftIn);
  }

  if (rightIn && rightIn.length > 0) {
    root.right = buildTree(rightPre, rightIn);
  }

  //   console.log(leftIn, "leftIn");
  //   console.log(leftPre, "leftPre");

  //   console.log("rightIn", rightIn);
  //   console.log("rightPre", rightPre);
  return root;
}
// console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
// console.log(buildTree([3, 1], [3, 1]));
// console.log(buildTree([3, 1, 2, 4], [1, 2, 3, 4]));
// 4.(2)有优化空间

// 5.（105）根据一棵树的后序遍历与中序遍历构造二叉树。
function buildTree2(inorder, postorder) {
  if (!postorder || postorder.length === 0) return null;
  if (postorder.length === 1) return { val: postorder[0] };
  let root = {
    val: postorder[postorder.length - 1],
  };
  postorder.pop();
  let leftPre = [],
    leftIn = [],
    rightPre = [],
    rightIn = [];
  let inIndex = inorder.findIndex((o) => o === root.val);
  if (inIndex === 0) {
    inorder.shift();
    rightIn = inorder;
  } else if (inIndex === inorder.length - 1) {
    inorder.pop();
    leftIn = inorder;
  } else {
    leftIn = inorder.splice(0, inIndex);
    inorder.shift();
    rightIn = inorder;
  }
  if (leftIn) {
    leftPre = postorder.filter((pre) => {
      return leftIn.findIndex((o) => o === pre) >= 0;
    });
  }
  if (rightIn) {
    rightPre = postorder.filter((pre) => {
      return rightIn.findIndex((o) => o === pre) >= 0;
    });
  }
  if (leftIn && leftIn.length > 0) {
    root.left = buildTree(leftIn, leftPre);
  }

  if (rightIn && rightIn.length > 0) {
    root.right = buildTree2(rightIn, rightPre);
  }
  return root;
}
// console.log(buildTree2([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));

// 6.(107)给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
function levelOrderBottom(root) {
  if (!root || root.val === null || root.val === "undefined") return [];
  if (!root.left && !root.right) {
    return [[root.val]];
  }
  console.log(168);
  let curLevel = 1;
  let arr = [{ node: root, level: 1 }],
    result = [];
  while (arr && arr.length > 0) {
    let curNode = arr.shift();
    curLevel = curNode.level > curLevel ? curNode.level : curLevel;
    result[curLevel - 1] = result[curLevel - 1] || [];
    result[curLevel - 1].push(curNode.node.val);
    if (!curNode.node.right && !curNode.node.left) {
      continue;
    }
    if (curNode.node.left) {
      arr.push({ node: curNode.node.left, level: curLevel + 1 });
    }
    if (curNode.node.right) {
      arr.push({ node: curNode.node.right, level: curLevel + 1 });
    }
    console.log(arr, 186);
  }
  result = result.reverse();
  return result;
  //   console.log(result, 188);
}
let testData6 = {
  val: 3,
  left: {
    val: 9,
  },
  //   right: {
  //     val: 20,
  //     left: {
  //       val: 15,
  //     },
  //     right: {
  //       val: 7,
  //     },
  //   },
};
// console.log(levelOrderBottom(testData6));

// 7.(108)将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
function sortedArrayToBST(nums) {
  if (!nums) return null;
  if (nums.length === 1)
    return {
      val: nums[0],
    };
  if (nums.length === 2)
    return {
      val: nums[1],
      left: { val: nums[0] },
    };
  if (nums.length === 3)
    return {
      val: nums[1],
      left: { val: nums[0] },
      right: {
        val: nums[2],
      },
    };
  let midIndex = Math.floor(nums.length / 2);
  let root = {
    val: nums[midIndex],
  };
  //   console.log("leftstr", nums.slice(0, midIndex));
  //   console.log("rightstr", nums.slice(midIndex + 1, nums.length));

  let leftTree = sortedArrayToBST(nums.slice(0, midIndex));
  let rightTree = sortedArrayToBST(nums.slice(midIndex + 1, nums.length));
  root.left = leftTree;
  root.right = rightTree;
  return root;
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));

// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
// 8.（110）判断是否平衡二叉树
// 重点：求高度和比较状态每次都要更新存储，需要兼顾
function isBalanced(root) {
  if (!root || root.val === null || root.val === "undefined") return true;
  if (!root.left && !root.right) return true;
  let flag = true;
  let getDepth = (root) => {
    if (!root || root.val === null || root.val === "undefined") return 0;
    if (!root.left && !root.right) return 1;
    let leftDepth = root.left ? getDepth(root.left) : 0;
    let rightDepth = root.right ? getDepth(root.right) : 0;
    // console.log(leftDepth, "leftDepth");
    // console.log(rightDepth, "rightDepth");

    if (Math.abs(leftDepth - rightDepth) > 1) {
      flag = false;
    }
    return Math.max(leftDepth, rightDepth) + 1;
  };
  getDepth(root);
  return flag;
}

let testData8 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: "3",
      left: {
        val: 4,
      },
      right: {
        val: 4,
      },
    },
    right: {
      val: "3",
    },
  },
  //   right: {
  //     val: 2,
  //   },
};

// console.log(isBalanced(testData8));

// // 9.(111)树深度相关
// 给定一个二叉树，找出其最小深度。
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量

function minDepth(root) {
  if (!root || root.val === null || root.val === "undefined") return 0;
  if (!root.left && !root.right) return 1;
  if (!root.left) {
    return minDepth(root.right) + 1;
  }
  if (!root.right) {
    return minDepth(root.left) + 1;
  }
  let leftDepth = minDepth(root.left);
  let rightDepth = minDepth(root.right);
  return Math.min(rightDepth, leftDepth) + 1;
}

let testData9 = {
  val: 3,
  left: {
    val: 9,
    left: {
      val: 3,
    },
  },
  //   right: {
  //     val: 20,
  //     left: {
  //       val: 15,
  //     },
  //     right: {
  //       val: 7,
  //     },
  //   },
};

// 10.（144）二叉树前序遍历

// 11.（145）二叉树后续遍历
// console.log(minDepth(testData9));
