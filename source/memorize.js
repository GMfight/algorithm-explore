// 应用场景：菲波那切数列

// 函数记忆是指将上次的计算结果缓存起来，当下次调用时，如果遇到相同的参数，就直接返回缓存中的数据。
let memorize1 = function (fun) {
  let oldResult = [];
  return function () {
    let param = Array.from(arguments)
    if (oldResult[param.join('')]) {
      return oldResult[param.join('')]
    }
    oldResult[param.join('')] = fun.bind(this)(...param)
    return oldResult[param.join('')]
  }
}
function compare(oldP, newP) {
  return oldP.join('') === newP.join()
}

function fibo(n) {
  let result;
  if (n === 1) {
    result = 0;
  } else if (n === 2) {

    result = 1;
  } else {
    result = fibo(n - 1) + fibo(n - 2)
  }
  return result;
}
// 方法一.重新定义函数
fibo = memorize1(fibo)
// console.log(fibo(36))
console.log(fibo(46))

// 方法二.不使用函数名。使用arguments.callee(num-1)；注意：严格模式下会报错
function fibo2(n) {
  let result;
  if (n === 1) {
    result = 0;
  } else if (n === 2) {

    result = 1;
  } else {
    result = arguments.calleebo(n - 1) + arguments.callee(n - 2)
  }
  return result;
}

// 方式三 匿名函数命名
let fibo3 = function fibo(n) {
  let result;
  if (n === 1) {
    result = 0;
  } else if (n === 2) {

    result = 1;
  } else {
    result = f(n - 1) + f(n - 2)
  }
  return result;
}
