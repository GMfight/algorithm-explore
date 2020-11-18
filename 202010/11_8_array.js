// 两个有序数组合并
var merge = function(nums1,nums2) {
    let i=0,j=0;
    let num2Len=nums2.length;
  while(i<nums1.length&&j<nums2.length){
      if(nums1[i]>=nums2[j]){
          nums1.splice(i,0,nums2[j]);
          j++;
          i++;
          continue;
      }else{
          i++;
      }
  }
  console.log('i',i,'j',j)
  while(j<nums2.length){
      nums1[i]=nums2[j];
      i++;j++;
  }
  
  return nums1;
};
// console.log(merge([1,2,3,0,0,0],[2,5,6]),'88_a')
// （243）最短单词距离
// 两种实现方式（未测试）

function shortestDistance(words,word1,word2){
    // let l1=[],l2=[],minL=-1;
    let l1=-1,l2=-1,minL=-1;

    for(let i=0;i<words.length;i++){
        if(words[i]===word1){
            // l1.push(i)
            l1=i;
        }
        if(words[i]===word2){
            // l2.push(i)
            l2=i;
        }
        if(l1>-1&&l2>-1){
            minL=minL===-1?Math.abs(l2-l1):Math.min(minL,Math.abs(l2-l1))
        }
        console.log(minL,40)
    }

    // for(let i=0;i<l1.length;i++){
    //     for(let j=0;j<l2.length;j++){
    //     minL=minL===-1?Math.abs(l2[j]-l1[i]):Math.min(minL,Math.abs(l2[j]-l1[i]))
    //     }
    // }
    return minL;
}
// console.log(shortestDistance(["practice",'practice', "makes",'coding', "perfect", "coding", "makes"],'coding','practice'),'243_a')
// (605)
var canPlaceFlowers = function(arr, n) {
    if(n===0) return true;
    let visited=[],len=arr.length;
    let dp=(sIndex,n)=>{
        if(n==0) return true;
        if(sIndex>=len) return false;
        if(arr[sIndex]==0&&(arr[sIndex-1]==0||sIndex==0)&&(arr[sIndex+1]==0||sIndex===len-1)){
            let res=dp(sIndex+2,n-1);
            console.log('res',res,'sIndex',sIndex,62)
            return res;
        }else{
           let res=dp(sIndex+1,n) 
        //    console.log('res',res,'sIndex',sIndex,66)
            return res;
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
           let res= dp(i,n)
           if(res) return true;
        }
    }
    return false;
};
// console.log([1,0,0,0,1,0,0],2)
// console.log(canPlaceFlowers([1,0,0,0,1,0,0],2),)

/* （628）列表中最大乘积推导公式（参考628）
Max(最大值*最大值，最大值*最小值) */

// 54螺旋矩阵（未通过，待修改）
let test_54=[
    [ 1, 2, 3 ,4],
    [  5, 6 ,7,8],
    [  9,10,11,12 ]
   ]
var spiralOrder = function(matrix) {
    let h=matrix.length,w=matrix[0].length,wStart=0,wEnd=w-1,hStart=0,hEnd=h-1,i=0,j=0;
    let res=[]
    while(res.length<=w*h){
        // console.log(hStart,'hStart',hEnd,'hEnd',wStart,'wStart',wEnd,'wEnd','i',i,'j',j,8)
        if(hEnd<0||hStart>=h||wEnd<0||wStart>=w) {
            console.log('out of border')
            return res;
        }

         // 上
         if(j==wStart&&i==hStart){
            console.log('top')
            while(j<=wEnd){
                res.push(matrix[i][j])
                j++;
            }
            if(res.length===w*h) return res;
            j=wEnd;
            hStart++;
            i++;
        }
        // 右
        if(j==wEnd&&i==hStart){
            console.log('right')

            while(i<=hEnd){
                res.push(matrix[i][j]);
                i++;
            }
            if(res.length===w*h) return res;
            i=hEnd;
            wEnd--;
            j--;
         }

        //  下
        if(j==wEnd&&i==hEnd){
            console.log('bottom')

            while(j>=wStart){
                res.push(matrix[i][j])
                j--;
            }
            if(res.length===w*h) return res;

            j=wStart;
            hEnd--;
            i--;
        }
        // 左
        if(j===wStart&&i===hEnd){
            console.log('left')
            while(i>=hStart){
               res.push(matrix[i][j]);
               i--;
            }
            if(res.length===w*h) return res;

            i=hStart;
            wStart++;
            j++;
        }
       
    }

    return res;
};
console.log(spiralOrder(test_54),'54_a')


