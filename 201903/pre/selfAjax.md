###跨域
1.xmlHttpRequest是浏览器对象
    常用的方法和属性
    open(method,url,async)
    send(null/param)
    onreadystatechange：监控方法，请求的返回状态改变时触发
    readyState 4有返回
    status 200连接成功
    setReuestHeader('content-type','application/json')用于设置发送数据格式
2.json
    JSON.stringify(obj)
    JSON.parse(string)
3.fetch与ajax
    https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
    3.1）fetch的用法：执行http请求操作，接收http返回，返回一个函数，隐式参数时http返回：response
        fetch是全局window的方法，使用promise处理回调
        fetch请求失败4**，5**时也不会进入错误处理流程（reject），只能通过response.ok判断请求结果
    3.2）ajax：xmlhttprequest是浏览器提供的对象，通过readystate判断交互进行到哪一步，通过status判断请求完成返回的http状态码

