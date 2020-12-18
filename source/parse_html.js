let str='<div class="div1 btn"><p class="ptxt">this is p test</p>div test</div>';
// let str='<div class="div1 btn">div test</div>';

// let str='<xml><div></div></xml>';

// 处理节点类型
// 1）开始标签
// 2）开始标签内属性
// 3）文本节点
// 4）结束标签
function parseHtml(str){
    let queue=collectNode(str)
    console.log('queue',queue)
    // console.log
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
            i++;
            continue;
        }
        if(str[i]==='>'){
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
    // console.log('type',type,'val',val)
    if(type==='tag'){
        newNode={
            type:type,
            val:val,
            children:[]
        }
        if(!rootNode){
            rootNode=curNode=newNode;
        }else if(curNode.children){
            curNode.children.push(newNode)
        }
        return newNode
    }
    if(type==='text'){
        newNode={
            type:'text',
            tag:'txt',
            val:val
        }
        if(curNode.children){
            curNode.children.push(newNode)
        }else{
            curNode.children=[newNode]
        }
        // curNode.children=[...curNode.children,newNode]
        // return newNode;
    }
    if(type==='attr'){
        // console.log('attr node',123)
        newNode={
            type:'attr',
            val
        }
        if(curNode.attrs){
            curNode.attrs.push(newNode)
        }else{
            curNode.attrs=[newNode]
        }

    }
}

function parseNode(arr){
    while(arr.length>0){
        // console.log('len',arr.length,'curNode',curNode)
        let node=arr.shift();
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