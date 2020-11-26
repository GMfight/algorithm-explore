// 1.打印实心菱形
//     。。。
//   。。。
// 。。。

// 。。。
//   。。。
//     。。。

function printDiamond(len) {
  for (let i = 0; i < len; i++) {
    let row_len = len + i;
    let print_str = "";
    for (let j = 0; j < row_len; j++) {
      if (i - 1 >= j) {
        print_str += " ";
      } else {
        print_str += "。";
      }
    }
    console.log(print_str);
  }
}
// printDiamond(5)
// 2.设计一个简单的任务队列, 要求分别在 1,3,4 秒后打印出 "1", "2", “3"

function printArr(arr) {
  let curTask = arr.shift();
  if (!curTask) return;
  setTimeout(() => {
    console.log(curTask.val);
    printArr(arr);
  }, curTask.time * 1000);
}
printArr([
  {
    time: 1,
    val: "1",
  },
  {
    time: 3,
    val: "2",
  },
  {
    time: 4,
    val: "3",
  },
]);

// 3.顺时针打印二维数组
function clockWisePrint(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i % 2 === 0 ? arr[i].reverse().join(",") : arr[i].join(","));
  }
}

clockWisePrint([
  ["1", "2", "3"],
  ["a", "b", "c", "d"],
  ["4", "5", "6", "7"],
  ["e", "f", "g", "h"],
]);
