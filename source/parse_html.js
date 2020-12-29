// html字符串解析为dom节点
// 参考：https://chentaoqian.com/?p=208
let str='<div class="div1 btn">divstart<img src="123"/>pstart<p class="ptxt">pend</p>divend</div>';
// let str='<div class="div1 btn">div test</div>';
// let str='<div class="div1 btn"><img src="123"/></div>';

// let str='<xml><div></div></xml>';

// 处理节点类型
// 1）开始标签
// 2）开始标签内属性
// 3）文本节点
// 4）结束标签
function parseHtml(str){
    let queue=collectNode(str)
    parseNode(queue);
    console.log(JSON.stringify(rootNode))
}


function collectNode(str){
    let i=0;
    let sTagOpen=false,eTagOpen=false,attrOpen=false,hasAttr=false;
    let curStr='',res=[];
    
    while(i<str.length){
        if(str[i]==='<'){
            // tag开始结束
            if(str[i+1]==='/'){
                eTagOpen=true;
                i+=2;
                if(curStr){
                    // 添加文本节点
                    res.push({type:'text',val:curStr});
                    curStr='';
                }
                continue;
            }
            // tag刚刚开始
            sTagOpen=true;
            if(curStr){
                res.push({type:'text',val:curStr})
            }
            curStr=''
            i++;
            continue;
        }
        if(str[i]==='>'){
            if(str[i-1]==='/'){
                i++;
                sTagOpen=false;
                res.push({type:'attr',val:curStr.substring(0,curStr.length-1)})
                curStr='';
                res.push({type:'selfClose'})
                continue;
            }
            if(sTagOpen){
                // 添加头标签
                sTagOpen=false;
                i++;
                if(curStr){
                    if(hasAttr){
                        res.push({type:'attr',val:curStr})
                    }else{
                        res.push({type:'tag',val:curStr})
                    }
                }
                hasAttr=false;
                curStr='';
                continue;
            }
            res.push({type:'endtag',val:curStr})
            eTagOpen=false;
            curStr=''
            i++;
            continue;
        }
        if(sTagOpen){
            if(!attrOpen&&str[i]===' '){
                if(curStr){
                    res.push({type:'tag',val:curStr})
                }
                i++;
                curStr='';
                continue;
            }
            // 属性节点
            if(str[i]==="\""||str[i]==="\'"){
                attrOpen=!attrOpen;
                hasAttr=true;
            }
            curStr+=str[i];
            i++;
            continue;
        }
        curStr+=str[i]
        i++;
        continue;
    }   
    return res;
}
let queue=[],curNode=null,rootNode;

function insertNode({type,val}){
    let newNode=null;
    if(type==='tag'){
        newNode={
            type:type,
            val:val,
            children:[]
        }
    }
    if(type==='text'){
        newNode={
            type:'text',
            tag:'txt',
            val:val
        }
    }
    if(type==='attr'){
        newNode={
            type:'attr',
            val
        }
    }
    if(type==='attr'){
        if(curNode.attrs){
            curNode.attrs.push(newNode)
        }else{
            curNode.attrs=[newNode]
        }
    }else{
        if(!rootNode){
            rootNode=curNode=newNode;
        }else if(!curNode){
            curNode=newNode;
        }else if(curNode.children){
            curNode.children.push(newNode)
        }
    }
    return newNode;
}

function parseNode(arr){
    while(arr.length>0){
        // console.log('queue',queue,'curNode',curNode)
        let node=arr.shift();
        if(node.type==='selfClose'){
            queue.pop();
            curNode=queue.pop();
            continue;
        }
        if(node.type==='tag'){
            // 增加节点
            curNode=insertNode(node)
            queue.push(curNode)
            continue;
        }
        if(node.type==='endtag'){
            // 关闭节点
            queue.pop();
            curNode=queue.pop();
            continue;   
        }
        if(node.type==='text'){
            // 增加节点
            insertNode(node)
            continue;
        }
        if(node.type==='attr'){
            insertNode(node)
            continue;
        }
    }
}


parseHtml(str)