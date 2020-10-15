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
  let task = [], res = []
  let i = 0;
  while (i < urls.length) {
    task.push({
      handler: myReq(urls.slice(i, i + 1))
    })
    i++;
  }
  for (let i = 0; i < urls.length; i++) {
    // console.log('i',i,new Date().getTime())
    res[i] = await task[i].handler
  }
  return res;
}
function myReq(param) {
  return new Promise((resolve, reject) => {
    let execTime = Number(Math.random().toString().substring(3, 7))
    console.log('start', param, 20, execTime, `curtime:${new Date().getTime()}`)
    setTimeout(() => {
      // console.log('-end-', param, 20, execTime, `curtime:${new Date().getTime()}`)

      return resolve({
        param,
        execTime
      })
    }, execTime)
  })
}

async function exe() {

  let res = await myhandlerAsync(['a', 'b', 'c'], 2)
  console.log(res, 37)
}
exe()