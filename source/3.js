// let obj={
//     label:'123',
//     label2:this.label,
//     say2:function(){
//         setTimeout(function(){
//             console.log(this.label);
//         })
//     }
// }
// console.log(obj.label2);
// obj.say2();
let template = '你好，我们公司是{{ company }}，我们属于{{group.name}}业务线，我们在招聘各种方向的人才，包括{{group.jobs[0]}}、{{group["jobs"][1]}}等。';


let obj = {
    group: {

        name: '天猫',

        jobs: ['前端']

    },

    company: '阿里'

}
render(template,obj)
function render(str,obj){
    let keys=parseHtml(str)
    str=str.replace(/(\[)|(\[\")/g,'.');
    str=str.replace(/\]|\"/g,"")
    // str=str.replace('["','.').replace('"]','').replace('[','.').replace(']','')
    console.log('str2',str)
    console.log('keys final',keys)
    for(let i=0;i<keys.length;i++){
          let curReg=new RegExp(`{{\\s*${keys[i].key}\\s*}}`,'g')
        console.log('key',keys[i].key,'matchResult',str.match(curReg),'35')
        str=str.replace(curReg,keys[i].val)
    }
    console.log(str,'str')

}

function parseHtml(str){
	let keys=str.match(/{{\s*[\w+.*"\[\]]+\s*}}/g)
    keys=keys.map(key=>{
    	return key.slice(2,key.length-2).trim()
    })
    // console.log('keys',keys)
    keys=keys.map(key=>{
          let keyArr=key.match(/(\w|\d)+/g)
      	let curObj=obj;
      	while(keyArr&&keyArr.length>0){
            let curKey=keyArr.shift();
          	if(!curObj){
            	return {
                	key:newKey,
                  	val:''
                }
            }
              curObj=curObj[curKey];
        }
      	return {
        	key:key.replace('["','.').replace('"]','').replace('[','.').replace(']',''),
          	val:curObj?curObj:''
        }
      	
    })
    return keys;
}