var label='globalLabal'
var obj={
    label:'myObj',
    print:function(){
        return ()=>{
            console.log(this.label)
        }
    }
}
obj.print()()

