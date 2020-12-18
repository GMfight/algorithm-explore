const str='<div class="div1 btns" style="width:200px;height:200px;"><p>this is title</p><div class="btns-item>btn1</div><div class="btns-item">btn2</div><div class="bottom"><img src="./hello.gif"/></div></div>'
// const str1='<div class="div1">this is div<p>this is p</p></div>'
function parseXML(str){
    // 匹配开始标签
    console.log(str.match(/<\/?\w+\s*(\w+(="[\w/.:;\s-]+"\s*)?)*\/?>/g))
}
parseXML(str);
let str2='./123'
// console.log(str.match(/[\w/.]+/g))