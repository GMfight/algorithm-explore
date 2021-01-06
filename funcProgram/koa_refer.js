// 参考其它洋葱模型的实现：https://lq782655835.github.io/blogs/node/koa-compose-modal.html
function compose(middleware){
    return function(context,next){
        let index=-1;
        return dispatch(0);
        function dispatch(i){
            let fn=middleware[i];
            if(i===middleware.length) fn=next;
            if(!fn){
                return Promise.resolve()
            }
            return Promise.resolve(fn(context,()=>{
                return dispatch(i+1)
            }))
        }

    }

}