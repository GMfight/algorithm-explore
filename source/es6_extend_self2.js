// es6类的概念
class Parent1 {
  constructor(label) {
    this.label = label;
  }
  printLabel() {
    console.log(this.label, 7);
  }
}

class Child1 extends Parent1 {
  constructor(label, age) {
    super(label);
    this.age = age;
  }
  printAge() {
    console.log("label", this.label, 17);
    console.log("age", this.age, 18);
  }
}

let pObj1 = new Child1("pObj1", 22);
// pObj1.printAge();

// 1.es5继承的实现；寄生组合式继承
// 1）父类构造函数初始化（通过设置原型链，访问父类构造函数）
// Object.setPrototypeOf(Child, Parent);
// 再;
// Object.getPrototypeOf(Child).call(this, args);
// 可以调用到父类的构造函数;
// 2）获取父类方法
// Child.prototype = Object.create(Parent.prototype);
// Child.prototype.constructor = Child;
// 3）class创建
// 原型属性和静态（类）属性（区别？）；
// 静态（类）方法：不能被实例继承的属性，只能通过类直接调用；

function Parent2(label) {
  console.log("parent2 init");
  this.label = label;
}
Parent2.prototype.sex = function() {
  this.sex = "female";
};

Parent2.prototype.printLabel = function() {
  console.log(this.label, 30);
};
// let pObj2 = new Parent2("pObj2");
// pObj2.printLabel();

function Child2(label, age) {
  Object.getPrototypeOf(Child2).call(this, label);
  this.age = age;
  this.printInfo = function() {
    console.log(this.label, this.age, "hello", 41);
  };
}

function _inheritP(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  Object.setPrototypeOf(Child, Parent);
}
_inheritP(Parent2, Child2);

let pObj3 = new Child2("child2", 49);
console.log(pObj3, 62);
pObj3.printInfo();
pObj3.printLabel();

function _createClass() {
  return function(constructor, protoProps, staticProps) {
    //   原型属性添加到原型上
    if (protoProps) {
      for (let i in protoProps) {
        Object.defineProperty(constructor.Prototype, {
          enumerable: protoProps[i].enumerable,
          configurable: true,
          writable: protoProps[i].value ? true : false,
          value: protoProps[i].value,
        });
      }
    }
    // 类属性添加到constructor上
    if (staticProps) {
      for (let i in staticProps) {
        Object.defineProperty(constructor, {
          enumerable: staticProps[i].enumerable,
          configurable: true,
          writable: staticProps[i].value ? true : false,
          value: staticProps[i].value,
        });
      }
    }
    return constructor;
  };
}
