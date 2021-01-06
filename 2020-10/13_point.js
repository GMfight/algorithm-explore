// 指针相关
// 1.两个字符串，最长公共子串
function commonStr(arr,brr){
    let tmp=arr;
    arr=arr.length>brr.length?brr:arr;
    brr=tmp.length>brr.length?tmp:brr
    let maxStr=''
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<=arr.length;j++){
            // console.log(brr)
            if(brr.indexOf(arr.substring(i,j))>=0){
                let commonStr=arr.substring(i,j);
                maxStr=maxStr.length>commonStr.length?maxStr:commonStr
            }
        }
    }
    return maxStr
}
// console.log(commonStr('1231efghabcefghil','abc 123 efghilmnopq334563y'))
// 2.公共子序列(暴力破解法失败)
function longestCommonSubsequence2(arr,brr){
    let tmp=arr,commonArr=[],lastIndex=-1;
    arr=arr.length>brr.length?brr:arr;
    brr=tmp.length>brr.length?tmp:brr
    arr=arr.split(''),brr=brr.split('');
    for(let j=0;j<arr.length;j++){
        commonArr[j]=[]
        for(let i=j;i<arr.length;i++){
            brr.find((o,oIndex)=>{
                if(!o.choosed&&o===arr[i]&&oIndex>lastIndex){
                    console.log(arr[i],oIndex)
                    commonArr[j].push(arr[i])
                    brr.splice(oIndex,1,{
                        val:arr[i],
                        choosed:true
                    })
                    lastIndex=oIndex;
                    return true;
                }
            })
        }
        brr=brr.map(o=>{
            return o.choosed?o.val:o
        })
        lastIndex=-1;

    }
    commonArr.sort((a,b)=>{
        return b.length-a.length;
    })
    console.log(commonArr)
    return commonArr[0]&&commonArr[0].length||0;
}
console.log(longestCommonSubsequence("mhunuzqrkzsnidwbun","szulspmhwpazoxijwbq"))

// 动态规划
function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;

    // 定义二维数组m行，n列，都初始化为0
    // base case为dp[0][...] 和 dp[...][0]
    const dp = [];
    for (let i = 0; i < m + 1; i++) {
        dp[i] = [];
        for (let j = 0; j < n + 1; j++) {
            dp[i][j] = 0;
        }
    }

    // 进行状态转移，从前往后遍历
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            // 找到1个 lcs 的元素，然后继续往前找
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                // 这里没有比较dp[i-1][j-1],因为它在三者中三最小的，没有必要比较
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // 最后一个元素即为结果
    
    return dp[m][n];
};



    // t h i s  h e l l o w o r d
    // b        
    // e          1
    // a
    // w                  1 
    // o                1
    // r                      1
    // d                        1
    // i   1
    // s      1
// 两数组交集（数组内有重复元素）
function intersection(arr,brr){
    
}