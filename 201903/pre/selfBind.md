####重新封装bind
1.apply(obj,param1,...,paramN)形式的参数和类数组区别
    数组有完整的操作方法，以下标为索引；
    类数组实际是字面量对象，以下标为键值，不过多了length属性。
    类数组有push操作，以类数组length值为基础索引做操作
    类数组转数组：Array.from()，Array.prototype.slice.call(arguments)
2.柯里化过程
    2.1）收集参数
    2.2）返回函数供下一步继续调用
    2.3）借助func.apply(null,args)执行
3.apply,bind,call的区别
    apply,call调用时会执行截取的函数apply(obj,[]) call(obj,arg1,arg2)
    bind返回函数
4.返回构造函数（实现）
    https://www.jianshu.com/p/6958f99db769
    https://juejin.im/post/5c09e6f9e51d456c4c49f4c6
    //如果是作为构造函数使用，绑定this；如果作为实例方法，绑定context
    func(context){
        let self=this
        var fBind=function(){
            return self.apply(this instanceof fBind?this:context,arguments)
        }
        var F=function(){}
        F.prototype=this.prototype

        fBind.prototype=new F()
        return fBind
    }
5.