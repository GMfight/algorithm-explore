// 比较麻烦
promiseAll1 = function (promises) {
  let resList = [],
    count = 0,
    newP = promises.map(o => {
      return {
        index: count++,
        handler: o
      }
    })
  return new Promise((resolve, reject) => {
    newP.forEach(o => {
      let curPromise = o.handler
      console.log(o.index, 14)
      curPromise.then((res) => {
        resList[o.index] = res;
        console.log(res, 23)

        count--;
        console.log(count, 20)

        if (count === 0) {
          resolve(resList)
        }
      }, (err) => {
        console.log('reject', 27)
        return reject(err)
      }).catch(e => {
        console.log('error', 30)

        reject('error')
      })
    });

  })
}
// 优化代码
// 考察：数组遍历与闭包
promiseAll2 = function (promises) {
  return new Promise((resolve, reject) => {
    let resList = [];
    let count = promises.length;
    promises.forEach((o, oIndex) => {
      o.then((res) => {
        console.log(oIndex, 42)
        console.log(res, 43)
        resList[oIndex] = res;
        count--
        if (count === 0) {
          return resolve(resList)
        }
      }, err => {
        console.log('reject', 47)
        return reject(err)
      })
    })
  })
}

function myReq(param) {
  return new Promise((resolve, reject) => {
    let execTime = Number(Math.random().toString().substring(3, 7))
    console.log('start', param, 20, execTime, `curtime:${new Date().getTime()}`)
    setTimeout(() => {
      // console.log('-end-', param, 20, execTime, `curtime:${new Date().getTime()}`)
      if (execTime > 7000) {
        return reject('timeout')
      }
      return resolve({
        param,
        execTime
      })
    }, execTime)
  })
}
// 优雅处理async/await 异常 ,参考：
// https://juejin.im/post/6844903895748050958
async function exe() {
  // let reqError;
  let res = await promiseAll2([myReq('a'), myReq('b'), myReq('c')]).catch(e => {
    reqError = e;
    console.log('error', 59)
  })
  console.log(res, 37)
  // console.log(JSON.stringify(res), 37)

}
exe()
