// 3.无重复字符的最长子串（滑动窗口）
// dp[i]=dp[i-1]
function depulate(str){
    if(!str) return 0;
    let maxLen=1;
    let res=[0,1]
    for(let j=1;j<str.length;j++){
        if(str[j]===str[res[0]]){
            res[0]=res[0]+1;
            res[1]=res[1]+1;
            continue;
        }
        let index
        if(res[1]===res[0]){
            index=str[res[0]]===str[j]?1:-1
        }else{
            index=str.substring(res[0],res[1]).indexOf(str[j])
        }
        // console.log('index',index)
        if(index>=0){
            res[0]=res[0]+index+1
        }
        res[1]=res[1]+1;
        maxLen=Math.max(maxLen,res[1]-res[0])
    }
    return maxLen;
}
// console.log(depulate('aab'))
// let str='abcd';
// str.substring(1,2)
// console.log(str,'str')
// 14.最长公共前缀
function longestCommonPrefix(strs){
    strs.sort((a,b)=>{
        return a.length-b.length;
    })
    // console.log(strs,'strs')
    let maxLen='';
    for(let i=0;i<strs[0].length;i++){
        let curChar=strs[0][i]
        let index=strs.findIndex(str=>str[i]!==curChar)
        if(index>=0){
            return maxLen;
        }else{
            maxLen+=strs[0][i]
        }
    }
    return maxLen;
}
// console.log(longestCommonPrefix(["flower","flow","flight"]))
