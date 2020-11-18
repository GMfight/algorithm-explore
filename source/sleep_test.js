
function mySleep1(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve()
    }, timeout)
  })
}
// console.log(1, new Date().getTime())
// mySleep1(4000).then(() => {
//   console.log(2, new Date().getTime())
// })

function mySleep2(timeout) {
  let endTime = new Date().getTime() + timeout;
  for (let curTime = new Date().getTime(); curTime < endTime;) {
    curTime = new Date().getTime()
  }
}
// console.log(3, new Date().getTime())
// mySleep2(3000)
// console.log(4, new Date().getTime())
