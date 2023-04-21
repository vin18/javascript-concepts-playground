function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.prototype.sayHi = function () {
  console.log(this.name + ' says hi!');
};

function Dog(name, age) {
  Animal.call(this, name, age);
  this.kind = true;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.sayBye = function () {
  console.log(this.name + ' says bye!');
};

const animal = new Animal('Jack', 5);
const dog = new Dog('Steve', 7);

class Animal1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(this.name + ' says hi!');
  }
}

class Dog1 extends Animal1 {
  constructor(name, age, kind) {
    super(name, age);
    this.kind = kind;
  }

  sayBye() {
    console.log(this.name + ' says bye!');
  }
}

const animal1 = new Animal1('Jack', 10);
const dog1 = new Dog1('Steve', 9, true);
