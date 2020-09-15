// 括号匹配（答案错误）
function cloure(arr) {
  if (arr.length == 1) return 0;
  if (arr.length == 2) {
    if (arr[0] == "(" && arr[1] == ")") return 2;
    return 0;
  }
  let result = 0;

  for (let i = 0, j = arr.length - 1; i < j; ) {
    if (arr[j] == "(") {
      j--;
      continue;
    }
    if (arr[i] == ")") {
      i++;
      continue;
    }
    let newStr = "";
    if (arr[j - 1] == "(") {
      newStr = arr.substring(i, j - 2);
      result = cloure(arr.substring(i, j - 2)) + 2;
    } else {
      newStr = arr.substring(i + 1, j - 1);
      result = cloure(newStr) + 2;
    }
    console.log(newStr, 25, `i:${i}`, `j:${j}`);
    return result;
  }
  return result;
}
// console.log(cloure("(()"));
console.log(cloure(")()())"));
