###大整数求和
1.大整数定义:数值表示范围是2的53次方，绝对值大于该值的运算计算都会出错
2.Number对象的用法
    2.1)类型判断
    typeof NaN //'number'
    NaN==NaN //false
    +-*/运算符出现，会将操作数转为number(+特殊，是字符串拼接),转换失败得到的计算结果undefined
    数字+Nan/undefined=NaN
    2.2)类型转换
    Number(null) //0
    Number(undefined)   //NaN
    2.3)isNaN和Number.isNaN
    isNaN：数字都返回false，其它返回true
    Number.isNaN：NaN返回true，其它返回false
    2.4）判断是否是整数
    Number.isInteger()
3.操作符优先级
    +优先级高于三目运算符
4.number，字符串，数组的一些转换
    number转字符串：tostring
    字符串转数组：split('')
    数组转字符串：join()
5.tosSring和valueOf



