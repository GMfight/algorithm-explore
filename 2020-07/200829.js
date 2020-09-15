// 动态规划1，路径数量问题
function paths(m, n) {
  if (m == 1 && n == 1) return 1;
  if (m == 1 || n == 1) return 1;
  if (m == 2 && n == 2) return 2;
  let path_r = paths(m - 1, n);
  let path_b = paths(m, n - 1);
  return path_r + path_b;
}
console.log(paths(51, 9));//运行超时

// 动态规划思路2
// arr[i][j]=arr[i+1][j]+arr[i][j+1]
// 对二维数组求和
function paths2(m, n) {
  let arr = [];
  let num=0;
  for (let i = m-1; i >=0; i--) {
    arr[i] = arr[i] || [];
    for (let j = n-1; j >=0; j--) {
        if(i==m-1||j==n-1){
            arr[i][j]=1;
        }else{
            arr[i][j]=arr[i+1][j]+arr[i][j+1]
        }
        num+=arr[i][j];
    }
  }
//   console.log(arr, 25);
  return arr[0][0];
}
console.log(paths2(3, 2), 26);
// 动态规划思路3
排列组合数学知识

动态规划思路4


0   0   0   0   1    2   2   2
0   0   0   0   3   3   3   3
0   0   0   0   3   3   3   3
0   0   0   0
0   0   0   0
0   0   0   0
