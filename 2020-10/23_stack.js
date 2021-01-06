// 栈相关
// 1.（20）有效的括号（只包含(,[,{}])
function isValid(s){
    let arr=[];
    let reObj={
        '[':']',
        '{':'}',
        '(':')'
    }
    for(let i=0;i<s.length;i++){
        if(s[i]==='('||s[i]==='['||s[i]==='{'){
            arr.push(s[i])
        }else{
            let findS=arr.pop();
            // console.log(s[i], findS, 9)
            if(s[i]==reObj[findS]){
                continue;
            }else{
                return false;
            }

        }
    }
    // console.log(arr,17)
    if(arr.length>0) return false;
    else return true;
}
console.log(isValid('()'),21)