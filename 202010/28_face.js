// 数组内部，按照空格反转空格中间的单词，有可能会有连续空格
function reverseArr(arr){
    let startIndex=0,endIndex=0;
    while(endIndex<=arr.length&&startIndex<arr.length){
        if(endIndex<=startIndex){
            endIndex++;
            continue;
        }
        if(arr[startIndex]===''){
            startIndex++;
            continue;
        }

        if(endIndex===arr.length){
            // reverse
            console.log(arr.slice(startIndex,endIndex),17)
            reversePartArr(startIndex,endIndex-1,arr)
            endIndex++;
            continue;
        }

        if(arr[endIndex]!==''){
            endIndex++;
            continue;
        }
        if(arr[endIndex]===''){
            // reverse
            console.log(arr.slice(startIndex,endIndex),28)
            reversePartArr(startIndex,endIndex-1,arr)
            startIndex=endIndex+1;
            endIndex++;
            continue;
        }
    }
    console.log(arr,35);
}

function reversePartArr(startIndex,endIndex,arr){
    // console.log('reversePartArr',startIndex,endIndex,arr)
    let i=startIndex,j=endIndex;
    while(i<j){
        let tmp=arr[i];
        arr[i]=arr[j];
        arr[j]=tmp;
        i++;
        j--;
    }
}
//['t','h','','a']
reverseArr(['','t','h','','','a','m','',''])