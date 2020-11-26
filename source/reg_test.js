// 1.正则金额处理
// 1234567890 ->1,234,567,890
function feeSplit(str) {
  let res = str.replace(/\B(?=\d{3}(?!\d))/g, ',')
  let res = str.replace(/\B(?=(\d{3})+(\b|,))/g, ',')
  return res;
}
console.log(feeSplit('1234567890'))

// 匹配url中的key对应的value
let searchStr=''
searchStr.match(/(?<=ie=)\w+\b/g)
