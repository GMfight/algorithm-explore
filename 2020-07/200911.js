// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
function permute(arr) {
  if (!arr || arr.length === 1) {
    return [arr];
  }
  if (arr.length == 2) {
    return [
      [arr[0], arr[1]],
      [arr[1], arr[0]],
    ];
  }
  let arr_o = permute(arr.slice(1, arr.length));
  let result = [];
  for (let i = 0; i < arr_o.length; i++) {
    for (let j = 0; j < arr_o[i].length; j++) {
      if (j === 0) {
        result.push([arr[0], ...arr_o[i]]);
        continue;
      }
      result.push([
        ...arr_o[i].slice(0, j),
        arr[0],
        ...arr_o[i].slice(j, arr_o[i].length),
      ]);
    }
    result.push([...arr_o[i], arr[0]]);
  }
  return result;
}
// console.log(permute([1]))

// 排列组合
// 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的每个数字在每个组合中只能使用一次。解集不能包含重复的组合
function combinationSum2(arr, target) {
  let result = findCom(arr, target);
  if (!result || result.length < 0) return [];
  if (result.length <= 1) return result;
  let keyObj = {};
  result = result.filter((o) => {
    let hash = o.sort().join("");
    if (keyObj[`${hash}`]) return false;
    keyObj[`${hash}`] = true;
    return true;
  });
  return result;
}
function findCom(arr, target) {
  if (!arr || arr.length == 0) return [];

  if (arr.length === 1) {
    if (arr[0] == target) return [[arr[0]]];
    return [];
  }
  let result = [];
  // 优化空间1，数组提前排序，和优化空间2配合使用
  arr = arr.sort((a, b) => {
    // console.log("a", a, "b", b, 58);
    return a - b;
  });
  //   console.log(arr, 60);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      result.push([arr[i]]);
      continue;
    }
    // 优化空间2：减少一次循环递归
    if (arr[i] > target) {
      return result;
    }
    let res = findCom(
      [...arr.slice(0, i), ...arr.slice(i + 1, arr.length)],
      target - arr[i]
    );
    if (res && res.length > 0) {
      //   console.log("res", res, "arr[i]", arr[i], "target", target, 65);
      for (let j = 0; j < res.length; j++) {
        result.push([arr[i], ...res[j]]);
      }
    }
  }
  return result;
}
// console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));

// 3.（39）给定一个可包含重复数字的序列，返回所有不重复的全排列。
function permuteUnique(arr) {
  let result = permute(arr);
  if (!result || result.length === 1) return result;
  let obj = {};
  result = result.filter((o) => {
    if (obj[o.join("")]) return false;
    obj[o.join("")] = true;
    return true;
  });
  //   console.log(result, 97);
  return result;
}
// console.log(permuteUnique([1, 1, 2]));

// 4.（39）给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的数字可以无限制重复被选取。

function combinationSum(arr, target) {
  let result = findCom1(arr, target);
  if (!result || result.length < 0) return [];
  if (result.length === 1) {
    return result;
  }
  let keyObj = {};
  result = result.filter((o) => {
    let hash = o.sort().join("");
    if (keyObj[`${hash}`]) return false;
    keyObj[`${hash}`] = true;
    return true;
  });
  return result;
}
function findCom1(arr, target) {
  if (!arr || arr.length == 0) return [];

  if (arr.length === 1) {
    if (arr[0] == target) return [[arr[0]]];
    if (target % arr[0] === 0) {
      let len = target / arr[0];
      let result = new Array(len);
      result.fill(arr[0]);
      return [result];
    }

    return [];
  }
  let result = [];
  // 优化空间1，数组提前排序，和优化空间2配合使用
  arr = arr.sort((a, b) => {
    // console.log("a", a, "b", b, 58);
    return a - b;
  });
  //   console.log(arr, 60);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      result.push([arr[i]]);
      continue;
    }
    // 优化空间2：减少一次循环递归
    if (arr[i] > target) {
      return result;
    }
    let res = findCom1(arr, target - arr[i]);
    if (res && res.length > 0) {
      //   console.log("res", res, "arr[i]", arr[i], "target", target, 65);
      for (let j = 0; j < res.length; j++) {
        result.push([arr[i], ...res[j]]);
      }
    }
  }
  return result;
}
