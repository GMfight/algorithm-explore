// let task1 = new Promise((resolve, reject) => {
//   resolve("task1");
//   //   return "task1";
// });
// task1.then(
//   (res) => {
//     console.log(res, 5);
//   },
//   (err) => {}
// );
// task1
//   .then((res) => {
//     console.log(res, 12);
//     return "task13";
//   })
//   .then((res1) => {
//     console.log(res1, 15);
//   });
// 1.async/await test
// asyncTest();
// async function asyncTest() {
//   await printName();
//   console.log("print 22");
// }
// function printName() {
//   console.log("name");
// }
// new Promise((resolve, reject) => {
//   console.log("promise", 29);
//   //   asyncTest();
//   resolve();
// }).then(() => {
//   console.log(31);
// });


// console.log(35);
// new Promise((resolve,reject)=>{
//   console.log('p1');
//   resolve()
// }).then((res)=>{
//   console.log('resolve1')
//   throw new Error('e1')

// },(err)=>{
//   console.log('reject1')
// }).then(res=>{
//   console.log('resolve2')
// },err=>{
//   console.log('reject2')
// }).catch(e=>{
//   console.log('error')
// })

