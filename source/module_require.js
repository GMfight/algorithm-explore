let name = 'anna'
let data = {
  name: name,
  id: '111'
}
function changeName(param) {
  name = param;
}
function changeData(param) {
  data = Object.assign(data, param)
}

module.exports = {
  r_name: name,
  r_data: data,
  r_changeName: changeName,
  r_changeData: changeData
}

setTimeout(() => {
  name = 'tony';
  data.id = '222'
}, 500)