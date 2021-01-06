// 动态规划之，最大/最小/最长/最短 子序列问题
// 重点：动态规划转移方程
// 1.(1025)
// 方程式：
// dp[i][j]=a[i]===b[j]&&dp[i-1][j-1]
function longestCommonSubsequence(astr,bstr){
    astr=astr.split('')
    bstr=bstr.split('')
    let dp=new Array(astr.length+1),maxLen=0;
    dp[0]=new Array(bstr.length+1).fill(0)
    for(let i=1;i<=astr.length;i++){
        dp[i]=new Array(bstr.length+1).fill(0)
        for(let j=1;j<=bstr.length;j++){
            if(astr[i-1]===bstr[j-1]){
                dp[i][j]=(dp[i-1][j-1]+1)
                console.log(dp[i][j],astr[i],bstr[j],33)

            }
            else{
                dp[i][j]=Math.max(dp[i-1][j-1],dp[i-1][j],dp[i][j-1])
                console.log(dp[i][j],38)

            }
            if(dp[i][j]>maxLen){
                maxLen=dp[i][j]
            }
        }
        console.log(dp[i],40)
    }
    
    return maxLen

}
// console.log(longestCommonSubsequence("abc","def"),43)
//        a  c  e
// a    [ 1, 0, 0 ] 40
// b    [ 0, 1, 0 ] 40
// c    [ 0, 1, 1 ] 40
// d    [ 0, 1, 1 ] 40
// e    [ 0, 1, 2 ] 40
//  2.(5)给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
// 方程式：
// 1）dp[i][j]=a[i]===a[j]&&dp[i+1][j-1] 参见：longestPalindrome3
// 2）参考连续子数组最大和问题
// 3）中心扩展法:每个值作为中心对称点，左右延伸求最长回文子串。参见：longestPalindrome4
// 奇数情况 偶数情况
// 动态规划参考了方法1

 function longestPalindrome(str){
     if(!str) return null;
     if(str.length===1) return str;
     if(str.length===2) return str.split('').reverse().join('')===str?str:str.substring(0,1);
    let dp=[];
    let arr=str.split('');
    let brr=str.split('').reverse()
    let maxLen=0,maxStr='';
    for(let i=0;i<arr.length;i++){
        dp[i]=new Array(arr.length)
        dp[i].fill(0)
        for(let j=0;j<arr.length;j++){
            if(arr[i]===brr[j]){
                dp[i][j]=1;
                // start_index=start_index===-1?i:start_index
            }
            if(i>0&&j>0&&dp[i][j]===1){
                dp[i][j]=dp[i-1][j-1]+1;
                console.log('isDp','i',i,'j',j,'str.length-(i+1):',str.length-(i+1),'(j+1)+dp[i][j]:',(j+1)+dp[i][j])
                if(str.length-(i+1)-dp[i][j]===(j+1)){  
                    console.log('isDp',true,53,dp[i][j])
                    maxStr=maxLen>dp[i][j]?maxStr:str.substring(i+1,i+dp[i][j]+1)

                    // maxStr=maxLen>dp[i][j]?maxStr:str.substring(i-dp[i][j]+1,i+1)
                    maxLen=Math.max(maxLen,dp[i][j]);

                }
            }
        }
    }
    // console.log(dp)
    // console.log(maxLen)
    // if(maxLen===1) return str.substring(0,1)
    // for(let i=0;i<dp[0].length;i++){
    //     console.log(dp[i])
    // }
    // console.log('maxLen',maxLen)
    console.log(maxStr,71)
    return maxStr
//  let db_index=dp.findIndex(o=>{
//      let max_index=o.findIndex(b=>b===maxLen)
//      return max_index>=0
//  })  
//  console.log(db_index,'db_index')
//  return str.substring(db_index-maxLen+1,db_index+1) 
//  let res1= endIndex-maxLen<0?str.substring(endIndex+1,endIndex+maxLen+1):str.substring(endIndex-maxLen+1,endIndex+1)
//   console.log(res1,55)
//  return res1;
 }
//  console.log(longestPalindrome2('aacabdkacaa'),71)

//  参考写法：
 function longestPalindrome1(str){
    if(!s || s.length < 2){
        return s;
    }
    var s_f = s.split('').reverse().join('');
    var resultStr = s[0];
    var maxLen = 1;
    var tmpLen = 1;
    var maxStrIndex = 0;
    var len = s.length;
    //判断字符串是否回文
    function isPalinerome(i,r){
        if(len - i - 1 == r -tmpLen + 1){
            return true
        }
        return false;
    }
    //初始化二维数组
    var len = s.length;
    var arr = new Array(len);
    for(var i = 0;i<len;i++){
        arr[i] = [];
        for(var r = 0;r<len;r++){
            arr[i][r] = 0
        }
    }
    for(var i = 0;i<len;i++){
        for(var r=0;r<len;r++){
            if(s[i] == s_f[r]){
                if(i==0 || r==0){
                    arr[i][r] = 1
                }else{
                    arr[i][r] = arr[i-1][r-1] + 1
                    tmpLen = arr[i][r]
                }
                if(tmpLen > maxLen && isPalinerome(i,r)){
                    maxStrIndex = r;
                    maxLen = tmpLen;
                    resultStr =  s.substring(i-tmpLen+1,i+1);
                }
            }
        }
    }
    return resultStr;
 }
 function longestPalindrome2(s){
    let n = s.length;
    let res = '';
    let dp = Array.from(new Array(n),() => new Array(n).fill(false));
    for(let i = n-1;i >= 0;i--){
        for(let j = i;j < n;j++){
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i+1][j-1]);
            if(dp[i][j] && j - i +1 > res.length){
                res = s.substring(i,j+1);
            }
        }
    }
    // for(let i=0;i<dp[0].length;i++){
    //     console.log(dp[i].join(','),141)
    // }

    // console.log(dp,140)
    return res;
}
function longestPalindrome3(str){
    str=str.split('')
    let dp=new Array(str.length),maxStr=[str[0]]
    // console.log(maxStr,164)
    for(let i=str.length-1;i>=0;i--){
        dp[i]=[]
        for(let j=i;j<str.length;j++){
            if(j===i){
                dp[i][j]=true
            }else if(j-i<=1){
                dp[i][j]=str[i]===str[j]
            }else{
                dp[i][j]=str[i]===str[j]&&dp[i+1][j-1]
            }
            if(dp[i][j]){

                maxStr=maxStr.length>(j-i+1)?maxStr:str.slice(i,j+1)
                // console.log('maxStr',maxStr,176)
            }
        }
    }
    // console.log(dp,177)
    return maxStr.join('');
}

function longestPalindrome4(str){
    // str=str.split('');
    let maxStr=str.substring(0,1);
    let compare=function(left,right){
        // let len=0;
        while(left>=0&&right<str.length){
            if(str[left]===str[right]){
                maxStr=maxStr.length<(right+1-left)?str.substring(left,right+1):maxStr
                left--;
                right++;
            }else{
                break;
            }
    
        }
        return maxStr;
    }
    for(let i=0;i<str.length;i++){
        // 两种情况
        compare(i,i); //a bab
        compare(i,i+1) //aa  baab
    }
    return maxStr;
}

// console.log(longestPalindrome3('abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa'))
 console.log(longestPalindrome4("bbbb"))

//  longestPalindrome('helewelw')

//        b  a  b  a  d
// d    [ 0, 0, 1, 0, 0 ]
// a    [ 0, 1, 0, 0, 0 ]
// b    [ 0, 0, 0, 0, 1 ]
// a    [ 0, 0, 0, 1, 0 ]
// b    [ 0, 0, 0, 0, 0 ]
//     h e l e w e l w
// a                 1    
// l       1       1
// e     1   1   1
// w           1   
// e     1   1   1
// l       1       1
// e     1   1   1
// h   1

//  3.(53)https://leetcode-cn.com/problems/maximum-subarray/
// 知识点：
// 1）动态规划：dp[i,j]=nums数组中i到j位置的连续和，用maxSum存储位置（方法时间和空间复杂度超标）；
// 2）计算机中数字的表示：最大和最小 [-2147483647]
// 3）方法二：dp[i]=Max(dp[i-1],nums[i])表示数组i位置以前的连续最大和 
 function maxSubArray(nums){
    let dp=new Array(nums.length),maxSum=-90000;
    let f_index=nums.filter(o=>{
        return o>=0
    });
    if(f_index<0){
        return Math.max(...nums)
    }
    if(nums.length===1){
        return nums[0]
    }

    for(let i=0;i<nums.length;i++){
        dp[i]=new Array(nums.length).fill(0)
        dp[i][i]=nums[i]
        maxSum=Math.max(maxSum,dp[i][i])

        // dp[i]=new Array(dp.length).fill(-9999)
        for(let j=i+1;j<nums.length;j++){
            //  if(i==0||j==0){
            //     dp[i][j]=nums[i]+nums[j]
            // }else{
                dp[i][j]=nums[j]+dp[i][j-1]
            // }
            maxSum=Math.max(maxSum,dp[i][j])

        }
    }
    console.log(dp,220)
    if(maxSum<=0){
        return Math.max(...nums)

    }
    return maxSum
 }


function maxSubArray1(nums){
    let dp=new Array(nums.length),maxSum=Math.max(...nums)
    for(let i=0;i<nums.length;i++){
        dp[i]=new Array(nums.length+1).fill(0);
        dp[i][i]=nums[i]
        maxSum=Math.max(maxSum,dp[i][i])
        if(i===nums.length-1){
            dp[i].fill(nums[i]);
            maxSum=Math.max(maxSum,nums[i])
            continue;
        }

        for(let j=i+1;j<nums.length;j++){

            dp[i][j]=dp[i][j-1]+nums[j];
            maxSum=Math.max(maxSum,dp[i][j])
            // console.log('i',i,'j',j,'maxSum',maxSum)
        }

    }
    console.log(dp)
    return maxSum;
}

function maxSubArray3(nums){
    let dp=[],maxSum=Math.max(...nums)
    for(let i=0;i<nums.length;i++){
        if(i===0){

            dp[i]=nums[i]
        }else{
            dp[i]=dp[i-1]>=0?(dp[i-1]+nums[i]):nums[i]
        } 
        maxSum=Math.max(dp[i],maxSum)
    }
    return maxSum;
}
//  console.log(maxSubArray3([-1,1,2,1]),223)
//  console.log(maxSubArray1([-1,1,2,1]),223)

//     1 -1 1
// 1  -&  0 1
// -1      0
// 1
// 4
// -1  
// function maxLine()
// dp[i][j]=Max(dp[i-1][j-index])
// 4.给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

// 说明:

// s 可能为空，且只包含从 a-z 的小写字母。
// p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
// 示例 1:

// 输入:
// s = "aa"
// p = "a"
// 输出: false
// 解释: "a" 无法匹配 "aa" 整个字符串。
function isMatch(s,p){

}
//  4.(20)给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false

function isValid(s){

}
// 5.(22)数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// 输入：n = 3
// 输出：[
//        "((()))",
//        "(()())",
//        "(())()",
//        "()(())",
//        "()()()"
//      ]
function generateParenthesis(n){}


// 6.(30)给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
// 示例 1：
// 输入：
//   s = "barfoothefoobarman",
//   words = ["foo","bar"]
// 输出：[0,9]
// 解释：
// 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
// 输出的顺序不重要, [9,0] 也是有效答案。
function findSubstring(s,words){

}

// 7.(31)实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
// 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
// 必须原地修改，只允许使用额外常数空间。

// 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1
function nextPermutation(nums){}

// 8.(1025)爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。

// 最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：

// 选出任一 x，满足 0 < x < N 且 N % x == 0 。
// 用 N - x 替换黑板上的数字 N 。
// 如果玩家无法执行这些操作，就会输掉游戏。

// 只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 False。假设两个玩家都以最佳状态参与游戏。

//  

// 示例 1：

// 输入：2
// 输出：true
// 解释：爱丽丝选择 1，鲍勃无法进行操作。
// 示例 2：

// 输入：3
// 输出：false
// 解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。
//  

// 提示：

// 1 <= N <= 1000
