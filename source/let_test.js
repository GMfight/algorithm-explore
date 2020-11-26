// 1.let与闭包
let arr = [],
  brr = [],
  crr = [];
for (var i = 0; i < 3; i++) {
  arr[i] = function() {
    console.log("a", i);
  };
}
for (let i = 0; i < 3; i++) {
  brr[i] = function() {
    console.log("a", i);
  };
}
for (var j = 0; j < 3; j++) {
  crr[j] = (function(j) {
    return function() {
      console.log("c", j);
    };
  })(j);
}

// arr[1]();
// brr[1]();
// crr[1]();
