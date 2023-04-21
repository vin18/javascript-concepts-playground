// Prototypes Blog - https://ui.dev/beginners-guide-to-javascript-prototype

// Playing around with prototypes
// Case 1 - Creating object literals
let person1 = {};

person1.name = 'Walter';
person1.age = 25;

person1.sayHi = function () {
  console.log(person1.name + ' says hi!');
};

// Case 2 - Functional Instantiation
function Person1(name, age) {
  let person = {};

  person.name = name;
  person.age = age;

  person.sayHi = function () {
    console.log(person.name + ' says hi!');
  };

  return person;
}

let walter = Person1('Walter', 25);
let john = Person1('John', 20);

// Case 3 - Functional Instantiation with Shared Methods
const personMethods1 = {
  sayHi() {
    console.log(this.name + ' says hi!');
  },

  sayBye() {
    console.log(this.name + ' says bye!');
  },
};

function Person2(name, age) {
  let person = {};

  person.name = name;
  person.age = age;

  person.sayHi = personMethods1.sayHi;
  person.sayBye = personMethods1.sayBye;

  return person;
}

walter = new Person2('Walter', 50);
john = new Person2('John', 15);

// Case 4 - Functional Instantiation with Shared Methods and Object.create
const personMethods = {
  sayHi() {
    console.log(this.name + ' says hi!');
  },

  sayBye() {
    console.log(this.name + ' says bye!');
  },
};

function Person3(name, age) {
  let person = Object.create(personMethods);

  person.name = name;
  person.age = age;

  return person;
}

// Case 5 - Prototypal Instantiation
function Person4(name, age) {
  let person = Object.create(Person4.prototype);

  person.name = name;
  person.age = age;

  return person;
}

Person4.prototype.sayHi = function () {
  console.log(this.name + ' says hi!');
};

Person4.prototype.sayBye = function () {
  console.log(this.name + ' says bye!');
};

// Case 6 - new keyword
function Person5(name, age) {
  // const this = Object.create(Person5.prototype);

  this.name = name;
  this.age = age;

  // return this;
}

Person5.prototype.sayHi = function () {
  console.log(this.name + ' says hi!');
};

Person5.prototype.sayBye = function () {
  console.log(this.name + ' says bye!');
};

walter = new Person5('Walter', 70);
walter.sayHi();
