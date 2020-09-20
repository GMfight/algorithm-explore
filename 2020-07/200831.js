// 九宫格输入法，输出拨号对应的所有字母串
function numToStr(num) {
  num = `${num}`;
  let map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let arr = [];
  for (let i = 0; i < num.length; i++) {
    if (i == 0) {
      arr.push(...map[num[i] - 2].split(""));
      continue;
    }
    let arrLen = arr.length;
    let cur_param = map[num[i] - 2];
    for (let j = 0; j < cur_param.length; j++) {
      let newArr = arr.slice(0, arrLen).map((o) => o + cur_param[j]);
      arr.push(...newArr);
    }
    arr.splice(0, arrLen);
  }
  return arr;
}

console.log(numToStr(23345), 17);

// 最接近的三数之和
function nearThree(nums, target) {
  let arr = [];
  let min_value = 9999;
  let x, y, z;
  for (let i = 0; i < nums.length; i++) {
    arr[i] = [];
    for (let j = 0; j < nums.length; j++) {
      if (i == j) {
        arr[(i, j)] = 9999;
        continue;
      }
      arr[i][j] = nums[i] + nums[j] - target;
      let newArr = nums.map((o, oIndex) => {
        if (oIndex == i || oIndex == j) return { key: oIndex, value: 9999 };
        return { key: oIndex, value: Math.abs(nums[oIndex] + arr[i][j]) };
      });
      newArr.sort((a, b) => {
        return a.value - b.value;
      });

      if (newArr[0].value < min_value) {
        min_value = newArr[0].value;
        x = i;
        y = j;
        z = newArr[0].key;
      }
      if (min_value == 0) return nums[i] + nums[j] + nums[z];
    }
  }
  return nums[x] + nums[y] + nums[z];
}
console.log(nearThree([-1, 2, 1, -4], 1));

// 相等的四个数之和(暴力破解，未得到结论)
function nearFour(nums, target) {
  let arr = [],
    result = [];
  let numLength = nums.length;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (i == j) {
        arr.push({
          key: [i, j],
          value: 999,
        });
      } else {
        arr.push({ key: [i, j], value: nums[i] + nums[j] });
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let curObj = arr[i];
    arr.filter((o, oIndex) => {
      if (
        o.key[0] == curObj.key[0] ||
        o.key[0] == curObj.key[1] ||
        o.key[1] == curObj.key[0] ||
        o.key[1] == curObj.key[1]
      ) {
        // console.log(o.key[0], o.key[1], i, "key重复");
        return false;
      }
      if (o.value + curObj.value === target) {
        result[
          [
            nums[curObj.key[0]],
            nums[curObj.key[1]],
            nums[o.key[0]],
            nums[o.key[1]],
          ]
            .sort()
            .join("")
        ] = [
          nums[curObj.key[0]],
          nums[curObj.key[1]],
          nums[o.key[0]],
          nums[o.key[1]],
        ].sort();
        // console.log(o, 89);
        return true;
      }
      return false;
    });
  }
  let res = Object.values(result);
  console.log(res);
  return res;
}
// console.log(nearFour([1, 0, -1, 0, -2, 2], 0), 98);
// 3.（18）
// 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
  let arr = [],
    result = [];
  let numLength = nums.length;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (i == j) {
        arr.push({
          key: [i, j],
          value: 99999,
        });
      } else {
        arr.push({ key: [i, j], value: nums[i] + nums[j] });
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let curObj = arr[i];
    arr.filter((o, oIndex) => {
      if (
        o.key[0] == curObj.key[0] ||
        o.key[0] == curObj.key[1] ||
        o.key[1] == curObj.key[0] ||
        o.key[1] == curObj.key[1]
      ) {
        // console.log(o.key[0], o.key[1], i, "key重复");
        return false;
      }
      if (o.value + curObj.value === target) {
        result[
          [
            nums[curObj.key[0]],
            nums[curObj.key[1]],
            nums[o.key[0]],
            nums[o.key[1]],
          ]
            .sort()
            .join("")
        ] = [
          nums[curObj.key[0]],
          nums[curObj.key[1]],
          nums[o.key[0]],
          nums[o.key[1]],
        ].sort();
        // console.log(o, 89);
        return true;
      }
      return false;
    });
  }
  let res = Object.values(result);
  console.log(res);
  return res;
}
