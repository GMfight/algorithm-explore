// let a='this_is a good story';
// let b=a.replace(/_[a-z]\U$/g);
// console.log(b);
// 日期转化
// timeStr = timeStr.replace(/\b(?=\d(\s|\:|\-|\b))/g, 0)
// url参数提取
// let cParamVals = cParam.match(/(\w=)[\w\-_=:,]+(\b|&)/g)
// let cParamKeys = cParam.match(/(\?|&)\w+\=/g)

// 下划线转驼峰/驼峰转下划线
function toCamel(str){
    str=str.replace(/\_[a-z]/g,function(match){
        // console.log(match,13)
        return match.substring(1,match.length).toUpperCase()
    })
    return str;
    // console.log(str,16)
}
toCamel('this_is_a')
