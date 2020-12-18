let origin1={
    label:'origin1',
    print(){
        console.log(this.label,'label')
    },
    testData:{
        info:{
            id:'info',
            age:'32'
        }
    }
}
let a=Object.create(origin1);
// a.label='a';
// console.log(a.label,'a-label')
// console.log(origin1.label,'origin-label')
a.testData.info.id='a';
// console.log(a.testData.info.id,'a-info')
// console.log(origin1.testData.info.id,'origin-info')
// Object.create是浅拷贝