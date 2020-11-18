// 块级作用域模仿
function blockImiate(n) {
  (function() {
    for (var i = 0; i < n; i++) {
      console.log("i", i);
    }
  })();
  //   console.log(i, "final");
}
blockImiate(4);
