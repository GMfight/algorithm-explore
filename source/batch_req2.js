// 发送批量请求2
function myhandlerAsync(urls, max) {
  return new Promise(async (resolve, reject) => {
    if (urls.length <= max) {
      let res = batchReq(urls);
      return resolve(res)
    }
    let curUrls = urls.splice(0, max);
    let curRes = await batchReq(curUrls);
    let nextRes = await myhandlerAsync(urls, max);
    return resolve(curRes.concat(nextRes))
  })
}

async function batchReq(urls) {
  let task = []
  while (urls && urls.length > 0) {
    task.push(myReq(urls.splice(0, 1)))
  }

  let res = await Promise.all(task)
  return res;
}
function myReq(param) {
  return new Promise((resolve, reject) => {
    let execTime = Number(Math.random().toString().substring(3, 7))
    console.log('start', param, 20, execTime)
    setTimeout(() => {
      console.log('-end-', param, 20, execTime)

      return resolve({
        param,
        execTime
      })
    }, execTime)
  })
}

async function exe() {

  let res = await myhandlerAsync(['a', 'b', 'c', 'd', 'e'], 2)
  console.log(res, 37)
}
exe()