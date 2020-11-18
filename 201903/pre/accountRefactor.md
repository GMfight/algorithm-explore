####正则匹配 1.字符串常用的正则相关的方法
str.search(reg)
str.match(reg)
str.replace(reg,strnew) 2.正则表达式的一些应用
\s 空白字符
[0-9]
a(?=b)匹配到以 b 结尾的 a

3.正则对象的 match 只能使用一次
4.ast 匹配
tag 开始：/\<(\w+)\>/g;
tag 结束：/\<\/(\w+)\>/g;
自结束 tag：/\<(\w+)\/\>/g;
tag 匹配：/\<\/?(\w+)\/?\>/g
带 attr 的 tag：/\<\/?((\w+\s*=?"?:?)+\s*)+\/?\>/g;
key 提取：/\s[a-zA-Z]\w+/g
val 提取：/"([a-zA-Z]\w+\:?\w+)"/g
