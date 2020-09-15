// 1.大数相加(失败)
function arrayAdd(arr, brr) {
  resultList = [arr, brr];
  resultList = resultList.sort((a, b) => {
    return b.length - a.length;
  });
  let str = new Array(resultList[0].length),
    cur_add = 0;
  console.log(resultList, 110, resultList[0].length, resultList.length);
  for (let i = 0; i < resultList[0].length; i++) {
    let curValue = 0;
    for (let j = 0; j < resultList.length; j++) {
      curValue =
        Number(curValue) + Number(resultList[j] ? resultList[j][i] || 0 : 0);
    }
    str[i] = (curValue + cur_add) % 10;
    cur_add = Math.floor((curValue + cur_add) / 10);
    console.log(str[i], 123);
    console.log(cur_add, 124);
  }
  if (cur_add > 0) str.push(cur_add);

  return str;
}

console.log(arrayAdd([2, 4, 3], [5, 6, 4]));
// 1.(29)给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
// 返回被除数 dividend 除以除数 divisor 得到的商。
function divide(sum, p) {
  let type = 0,
    returnStrict = false;
  if (sum === 0) return 0;

  if (sum > 0 && p > 0) {
    type = 1;
  } else if ((sum < 0) & (p < 0)) {
    type = 1;
    returnStrict = true;
  } else {
    type = -1;
  }
  sum = Math.abs(sum);
  p = Math.abs(p);

  if (sum < p) return 0;
  if (p === 1) {
    if (type < 0) {
      return sum >= ~(2 << 30) + 1 ? 2 << 30 : ~sum + 1;
    } else {
      return sum >= 2 << 32 && returnStrict ? sum - 1 : sum;
    }
  }

  let curRatio = 0;

  while (p << curRatio > 0 && p << curRatio <= sum) {
    curRatio++;
  }
  curRatio--;
  if (sum - p * Math.pow(2, curRatio) < p) {
    if (type < 0) {
      return ~Math.pow(2, curRatio) + 1;
    } else {
      return Math.pow(2, curRatio);
    }
  }
  let newRatio = divide(sum - p * Math.pow(2, curRatio), p);
  if (type < 0) {
    return ~(Math.pow(2, curRatio) + newRatio) + 1;
  } else {
    return Math.pow(2, curRatio) + newRatio;
  }
}

// 大数相乘（字符串形式）

function multiple(a, b) {
  if (a.length == 1 && b.length == 1) return `${a[0] * b[0]}`;
  if (a[0] === 0 || b[0] === 0) return "0";
  if (a.length === 1 && a[0] == "1") return b;
  if (b.length === 1 && b[0] == "1") return a;
  let arr = [];
  let resultList = [];
  for (let i = a.length - 1; i >= 0; i--) {
    let cur_param = 0,
      curStr = [];
    for (let j = b.length - 1; j >= 0; j--) {
      arr[j] = arr[j] || [];
      let m_value = a[i] * b[j] + cur_param;
      curStr[j] = m_value % 10;
      cur_param = Math.floor(m_value / 10);
    }
    // console.log(cur_param, 97);
    resultList[i] = curStr.join("") + getN(a.length - 1 - i);
    resultList[i] = cur_param > 0 ? cur_param + resultList[i] : resultList[i];
    // console.log(curStr, 99);
    // console.log(resultList[i], 100);
  }
  let result = 0;
  console.log(resultList, 106);
  resultList = resultList.map((o) => {
    return o.split("").reverse().join("");
  });

  resultList = resultList.sort((a, b) => {
    return b.length - a.length;
  });
  let str = new Array(resultList[0].length),
    cur_add = 0;
  console.log(resultList, 110);
  for (let i = 0; i < resultList[0].length; i++) {
    let curValue = 0;
    for (let j = 0; j < resultList[0].length; j++) {
      curValue =
        Number(curValue) + Number(resultList[j] ? resultList[j][i] || 0 : 0);
    }
    str[i] = (curValue + cur_add) % 10;
    cur_add = Math.floor((curValue + cur_add) / 10);
    console.log(str[i], 123);
    console.log(cur_add, 124);
  }
  if (cur_add > 0) str.push(cur_add);

  return str.reverse().join("");
}

// console.log(multiple("123", "456"), 128);

function getN(num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += "0";
  }
  return result;
}
//               1 2 3(i)
//               3 4 5(j)

//                     5(3,1)   11(3.2)  15(3,3)
//            4(2,1)   8(2,2)   12(2,3)
// 3(1,1)     6(1,2)   9(1,3)

// console.log(divide(2147483647, 3));

function compute(arr) {
  // console.log(arr, 31);
  let result = 0;
  arr.forEach((o, oIndex) => {
    result = result + o * Math.pow(10, oIndex);
  });
  return result;
}

// console.log(arrayAdd([1, 7, 1], [3, 6, 5, 8, 9, 1]), 37);

function palin(str) {
  //   判断是否回文;
  getPlains(str);
  //   判断长度;
}

// 最长回文子串
// 暴力破解： 字符串长时，不能通过

function getPlains(str) {
  if (!str) return [];
  if (str.length === 1) return str;
  if (isPlain(str)) return str;
  if (str.length === 2) return str[0];
  for (let i = 1; i < str.length; i++) {
    for (let j = 0; j <= i; j++) {
      let cur_str = str.substring(j, str.length - i + j);
      if (isPlain(cur_str)) return cur_str;
    }
  }
  return false;
}

function isPlain(param) {
  if (param.length === 1) {
    return true;
  }
  let newarr = param.split("");
  if (newarr[0] != newarr[newarr.length - 1]) {
    console.log("start end different");
    return false;
  }
  for (let i = 0; i < Math.floor(newarr.length / 2); i++) {
    let iLen = newarr.filter((o) => o == newarr[i]);
    console.log(iLen.length, 75, param.length, 75);
    if (iLen.length == param.length) {
      console.log("相同字符串");
      return true;
    }
    if (iLen.length % 2 != 0) return false;
  }
  let paramReverse = newarr.reverse().join("");
  if (paramReverse == param) {
    return true;
  } else {
    return false;
  }
}

// console.log(getPlains("1234"), 74);
// console.log(getPlains("12343"), 74);
// console.log(
//   getPlains("epeoplebythepeopleforthepeopleshallnotperishfromtheearth"),
//   74
// );
// console.log(
//   getPlains(
//     "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
//   ),
//   86
// );

// 参考思路:矩阵存值累加
function palin2(s) {
  let s_f = s.split("").reverse();
  let len = s.length,
    tmpLen = 0,
    maxLen = 0,
    resultStr = "";
  let arr = new Array(len);
  function isPalin2(i, r) {
    if (len - i - 1 == r - tmpLen + 1) {
      return true;
    }
    return false;
  }
  for (let i = 0; i < len; i++) {
    arr[i] = [];
    for (let r = 0; r < len; r++) {
      arr[i][r] = 0;
    }
  }
  for (let i = 0; i < len; i++) {
    for (let r = 0; r < len; r++) {
      if (s[i] == s_f[r]) {
        if (i == 0 || r == 0) {
          arr[i][r] = 1;
        } else {
          arr[i][r] = arr[i - 1][r - 1] + 1;
          tmpLen = arr[i][r];
        }
        if (tmpLen > maxLen && isPalin2(i, r)) {
          maxStrIndex = r;
          maxLen = tmpLen;
          resultStr = s.substring(i - tmpLen + 1, i + 1);
        }
      }
    }
  }
  return resultStr;
}

// console.log(palin2("aabcbe"));

// 动态规划，数组存值参考
function isPlain3(s) {
  let arr = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    arr[i] = [];
    for (let j = 0; j < s.length; j++) {
      arr[i][j] = false;
    }
  }
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      console.log(`i:${i},j:${j}`, 157);
      arr[i][j] = s[i] === s[j] && (i - j < 2 || arr[i - 1][j + 1]);
      if (arr[i][j] && i - j + 1 > maxLen) {
        maxLen = i - j + 1;
      }
    }
  }
  console.log(arr, 163);
  return maxLen;
}

// console.log(isPlain3("abcbea"));
