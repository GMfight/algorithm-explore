function uDom({ data, init }) {
  let keys = Object.keys(data);
  let that = this;
  that.init = init.bind(this);
  keys.map((key) => {
    that[key] = data[key];
    let val = data[key];
    let dep = new Dep();
    Object.defineProperty(this, key, {
      set: function(newval) {
        console.log(newval, 13);
        val = newval;
        dep.notify();
        console.log(data[key]);
      },
      get: function() {
        if (Dep.target) {
          dep.addSub(Dep.target);
        }
        return val;
      },
    });
  });
  that.init();
}

function Watcher(key, fun) {
  // let deps = (this.deps = []);
  // if (deps[key]) return;
  Dep.target = this;
  console.log(Dep.target);
  fun();

  this.exec = function() {
    fun();
  };
}

function Dep() {
  let subs = (this.subs = []);
  this.target = null;
  this.addSub = function(sub) {
    console.log("addsub", 50);
    subs.push(sub);
    sub.deps.push(this);
  };
  this.notify = function() {
    if (subs && subs.length > 0) {
      Object.values(subs).map((sub) => {
        sub.exec();
      });
    }
  };
}

let user1 = new uDom({
  data: {
    id: "123",
    name: "用户1",
  },
  init() {
    new Watcher(
      "name",
      function() {
        let nameEl = document.getElementById("username");
        console.log(nameEl, 65);
        nameEl.innerText = `用户名：${this.name}`;
      }.bind(this)
    );
    new Watcher(
      "id",
      function() {
        let idEl = document.getElementById("userid");
        idEl.innerText = `用户id：${this.id}`;
      }.bind(this)
    );
    new Watcher(
      "id",
      function() {
        let infoEl = document.getElementById("info");
        infoEl.innerText = `用户id：${this.id}，用户名：${this.name}`;
      }.bind(this)
    );
  },
});

setTimeout(() => {
  user1.name = Math.random();
  let newId = Number(user1.id) + 1;

  user1.id = newId;
}, 2000);

// setTimeout(() => {
//   user1.name = Math.random();
//   let newId = Number(user1.id) + 1;

//   user1.id = newId;
// }, 5000);

let importId = "123";
export { importId };
