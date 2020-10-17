// 背包问题相关整理
function change(amount, coins) {

    coins.sort((a,b)=>{
        return a-b;
    })
    console.log('anount',amount,'coins',coins)

    if(coins[0]>amount) return 0;
    if(coins[0]===amount) return 1;

    let count=0;
    // if(coins.findIndex(o=>o===amount)>=0) count++;
    for(let i=coins.length-1;i>=0;i--){
        if(coins[i]===amount){
            count++
        } else{

            let res=change(amount-coins[i],coins);
            // console.log(res,13)
            // console.log(count,i,15)
            if(res){
                count+=res;
            }
            console.log(count,'count',res,'res',21)
        }
    }
    // console.log('count',count)
    return count;
};
// console.log(change(5,[1,2,5]))
function change2(amount,coins){
    let dp=new Array(coins.length+1)
    for(let i=0;i<=coins.length;i++){
        dp[i]=new Array(amount+1).fill(0)
        // if(i===0)
        for(let j=0;j<=amount;j++){
            // console.log('i',i,'j',j)
            // if()
            if(j===0) {
               dp[i][j]=1
            }else if(i===0){
                dp[0][j]=0
            }else if(coins[i-1]-j>0){
                dp[i][j]=dp[i-1][j]
            }else{
                dp[i][j]=dp[i-1][j]+dp[i][j-coins[i-1]]
            }
        }
    }
    console.log(dp)
    return dp[coins.length,amount]
}
console.log(change2(5,[1,2,5]))
