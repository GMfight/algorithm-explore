let str='<div class="div1 btn">pstart<p class="ptxt">pend</p>divend</div>';
// let str='<div class="div1 btn">div test</div>';

function parseHtml(str){
    let queue=collectNode(str)
    // parseNode(queue);
    // console.log(JSON.stringify(rootNode))
}
function collectNode(str){
    let res=[];
    let startReg=/^\<\w+/,attrReg=/^\s*[\w="\s]*\>/,txtReg=/^\>[\w\s]+</,endReg=/^\<\/\w+\>/
    let count=0;
    while(str&&count<8){
        let startMatch=str.match(startReg);
        if(startMatch&&startMatch[0]){
            // console.log('startMatch',startMatch[0])

            str=str.substring(startMatch[0].length,str.length);
            res.push(startMatch[0]);
            // console.log('str',str,'res',res)
        }
        let attrMatch=str.match(attrReg);
        if(attrMatch&&attrMatch[0]){
            // console.log('attrMatch',attrMatch[0])

            str=str.substring(attrMatch[0].length-1,str.length);
            res.push(attrMatch[0].trim())
        }
        let txtMatch=str.match(txtReg);
        if(txtMatch&&txtMatch[0]){
            // console.log('txtMatch',txtMatch[0])
            str=str.substring(txtMatch[0].length-1,str.length);
            res.push(txtMatch[0].substring(1,txtMatch[0].length))
        }
        let endMatch=str.match(endReg);
        if(endMatch&&endMatch[0]){
            // console.log('endMatch',endMatch[0])

            str=str.substring(endMatch[0].length-1,str.length);
            res.push(endMatch[0])
            // console.log('endMatch',endMatch)
        }
        count++;
        // console.log('res',res)
        console.log('str',str,'res',res)

        // console.log('attrMatch',attrMatch)
        // console.log(startMatch,'smatch')
    }
    console.log(res,'res')
}
parseHtml(str)
