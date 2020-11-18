function myRender(template,data){
    let params=parseTemplate(template);
    params.forEach(o=>{        
        let reg=new RegExp(`{{${o}}}`,'g');
        template=template.replace(reg,data[o]||'')


        // template=template.replace(`{{${o}}}`,data[o]||'')
    })
    // console.log(template,6)
    return template;
}

function parseTemplate(str){
    arr=str.match(/{{\w+}}/g)
    let res=arr.map(o=>{
        return o.substring(2,o.length-2);
    })
    return res;
}

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {

    name: '姓名',
  
    age: 18
  
  };
  console.log(myRender(template,data));
