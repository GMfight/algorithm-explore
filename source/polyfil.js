// 节流函数的单次引入
// 定义时：
let curTask = null;
function throttle(fun, delay) {
  return function (params) {
    if (curTask) return;
    curTask = setTimeout(() => {
      curTask = null;
      fun.bind(this)(params);
    }, delay);
  };
}

// 使用时
// loadIosImgHandler = throttle(loadImg, 300)
// listenerRandom = Math.random()
// window.addEventListener('scroll', loadIosImgHandler, true)

// 节流函数多次引入,参考lodash
function Debounce(fun, delay) {
  let curTask = null;
  return function (params) {
    if (curTask) return;
    curTask = setTimeout(() => {
      clearTimeout(curTask);
      curTask = null;
    }, delay);
    fun.bind(this)(params);
  };
}

function throttle(fun, delay) {
  let lastTime = null;
  return function (params) {
    let curTime = new Date().getTime();
    if (!lastTime || curTime - lastTime > delay) {
      fun.bind(this)(params);
      lastTime = curTime;
    }
  };
}

let task1 = throttle(() => {
  console.log("task1 " + new Date().getTime());
}, 3000);
setInterval(task1, 500);
let task2 = throttle(() => {
  console.log("task2------------------------ " + new Date().getTime());
}, 5000);
setInterval(task2, 500);
