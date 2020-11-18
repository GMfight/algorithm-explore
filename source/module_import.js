let name = 'anna'
let data = {
  id: Math.random() + '1',
  name: 'anna'
}
function changeName(param) {
  name = param;
}
function changeData(param) {
  data = param
}

export { data, name, changeName, changeData };
setTimeout(() => {
  name = 'bolb'
  data.id = `${Math.random()}2`;
}, 500)