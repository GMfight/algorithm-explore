'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'longestVowelSubsequence' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function longestVowelSubsequence(s) {
    // Write your code here
    s=s.split('');
    let iIndex=j.findIndex(o=>o==='a');
    let startIndex=iIndex;
    let jIndex=0;
    let j=['a','e','i','o','u'];
    let i=0;
    iIndex++;
    while(iIndex<s.length){
        if(jIndex===5){
            endIndex=iIndex;
            iIndex=s.length;
            // 返回结果
        }
        if(jIndex===0){
            if(s[iIndex]===j[jIndex]){
                startIndex=iIndex;
                iIndex++;
            }else{
                jIndex++;
            }
        }else{
            if(s[iIndex]===j[jIndex]){
                iIndex++;
                jIndex++;
            }else{
                iIndex++;
            }
        }
        
    }
    if(jIndex!==5){
        return 0;
    }
    let result_str=s.slice(startIndex,endIndex);
    let mIndex=0,nIndex=0;
    while(mIndex<result_str.length){
        let curIndex=j.findIndex(o=>o===result_str[mIndex]);
        if(curIndex===nIndex){
            mIndex++;
        }else if(curIndex-nIndex===1){
            nIndex++;
        }else if(curIndex<nIndex){
            result_str.splice(mIndex,1)
        }else{
            mIndex++
        }
    }
    return result_str.length;
}
function main() {