// xml字符串解析
let str='<xml><div><p>this is p test</p></div></xml>';
// let str='<xml><div><p><a></a></p></div></xml>';
// let str='<div class="testdiv" style="fontSize:20px" ></div>';

function ASTParse(str){
    let startReg= /\<(\w+)\>/;
    let endReg=/\<\/(\w+)\>/;
    let selfReg=/\<(\w+)\/\>/;
    // let tagReg=/\<\/?((\w+\s*=?"?:?)+\s*)+\/?\>/g;
    let tagReg1=/\<\w+\>/g
    let tagReg2=/>[\s*\w+]+</g
    console.log(str.match(tagReg1),'reg1')
    console.log(str.match(tagReg2),'reg2')

    let tagReg=/(\<\w+\>)|(>[\s*\w+]+<)/g;
    let keyReg=/\s[a-zA-Z]\w+/g
    let valReg=/"([a-zA-Z]\w+\:?\w+)"/g
    // let selfAttrReg=/^[a-zA-Z]\w+=(\w\:)+/g;

    let tagArr=str.match(tagReg)
    console.log(tagArr,15)

    let keyArr=tagArr[0].match(/\s[a-zA-Z]\w+/g);
    let valArr=tagArr[0].match(/"([a-zA-Z]\w+\:?\w+)"/g)
    // console.log(keyArr,17)
    // console.log(valArr,18)
    let res=null,curNode,queue=[]
    function insertNode(tag){
        let newNode={
            name:tag,
        }
        // curNode=newNode;
        if(!curNode){
            res=newNode
            queue.push(curNode)
        }else if(!curNode.childs){
            curNode.childs=[newNode]
            queue.push(newNode)
        }else{
            curNode.childs.push(newNode)
            queue.push(newNode);
        }
            curNode=newNode;

    }
    for(let i=0;i<tagArr.length;i++){
        let curStr=tagArr[i];
        // console.log(curStr,35)
        if((/\<(\w+)\/\>/g).test(curStr)){
            let tag=curStr;
            tag=tag.substring(1,tag.length-2);
            insertNode(tag);
            queue.pop();
            curNode=queue[queue.length-1];
        }else if((/\<(\w+)\>/g).test(curStr)){
            let tag=curStr;
            tag=tag.substring(1,tag.length-1);
            // console.log(`----------------${tag}`,36)
            insertNode(tag)
            // if(tag==='a'){
            //     console.log(JSON.stringify(res),45)
            // }
        }else{
            let tag=curStr;
            tag=tag.substring(2,tag.length-1);
            queue.pop();
            curNode=queue[queue.length-1];
        }
    }
    // console.log(curNode,50)
    // console.log(JSON.stringify(curNode),45)
}
// console.log((/\<(\w+)\>/g).test('<div>'),'a')

ASTParse(str);
// console.log(str.match(/[a-zA-Z]\w+="(\w\:?)+"/g),66);
// console.log(str.match(/\s[a-zA-Z]\w?=/g),67)
// console.log(str.match(/\s[a-z]\w*/g),67)
// console.log(str.match(/("(\w+:?)+")(?=\s|\>|\/\>)/g),69)